const setupData = require("../setup/assessment");
const {recommendations, diseases, diseaseRecommendationScore, form} = setupData;

const migrateDiseaseAndRecommendations = async (knex) => {
  const recVal = recommendations.map(rec => `('${rec.code}', '${rec.recommendation}')`).join(", ");
  const diseaseVal = diseases.map(dis => `('${dis.code}', '${dis.disease}')`).join(", ");
  const thresholdVal = diseaseRecommendationScore.map(threshold => {
    const diseaseThresholdScore = [];
    threshold.recommendations.forEach(rec => {
      diseaseThresholdScore.push(`('${threshold.disease}', '${rec}', ${threshold.score})`);
    });
    return diseaseThresholdScore.join(', ');
  }).filter(a => !!a).join(', ');

  await knex.raw(`
        INSERT into recommendation
        VALUES ${recVal};

        INSERT into disease
        VALUES ${diseaseVal};

        INSERT into disease_recommendation
        VALUES ${thresholdVal};
    `);
};

const migrateFormAndGrading = async (knex) => {
  const {code, version, questions, diseaseScores} = form;
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];

    for (let j = 0; j < question.options.length; j++) {
      let option = question.options[j];
      await knex.raw(`
          INSERT into question
          VALUES ('${question.code}', '${question.question}')
          ON CONFLICT DO NOTHING;

          INSERT into option
          VALUES ('${option.code}', '${option.option}')
          ON CONFLICT DO NOTHING;

          INSERT into form
              (code, version)
          SELECT '${code}', '${version}'
          WHERE NOT EXISTS
              (SELECT id FROM form WHERE code = '${code}' AND version = '${version}');

          WITH id_of_form AS
                       (SELECT id FROM form WHERE code = '${code}' AND version = '${version}'),

               id_of_mapping AS (INSERT into form_question_option
                   (form_id, question_code, option_code)
                   VALUES ((SELECT id from id_of_form), '${question.code}', '${option.code}') RETURNING id)
          
          ${Object.keys(diseaseScores).map(diseaseCode => `
            INSERT
            into disease_form_option
            VALUES ('${diseaseCode}', (SELECT id from id_of_mapping), ${diseaseScores[diseaseCode][i][j]});
          `).join("\n")}
      `);
    }
  }
};

exports.up = async function (knex) {
  await migrateDiseaseAndRecommendations(knex);
  await migrateFormAndGrading(knex);
};


exports.down = async function (knex) {
  await knex.raw(`
       DELETE
       FROM recommendation
       WHERE ${recommendations.map(rec => `(code = '${rec.code}')`).join(' OR ')};

       DELETE
       FROM disease
       WHERE ${diseases.map(dis => `(code = '${dis.code}')`).join(' OR ')};

       DELETE
       FROM question
       WHERE ${form.questions.map(q => `(code = '${q.code}')`).join(' OR ')};

       DELETE
       FROM option
       WHERE ${form.questions.map(q => q.options.map(opt => opt.code)).reduce((acc, b) => [...acc, ...b], []).map(opt => `(code = '${opt.code}')`).join(' OR ')};
    `);
};


exports.up = async function (knex) {
  await knex.raw(`
      CREATE TABLE IF NOT EXISTS question
      (
          code         text,
          display_name text NOT NULL,
          PRIMARY KEY (code)
      );

      CREATE TABLE IF NOT EXISTS option
      (
          code         text,
          display_name text NOT NULL,
          PRIMARY KEY (code)
      );

      -- unique multi key
      CREATE TABLE IF NOT EXISTS form
      (
          id          serial,
          code        text NOT NULL,
          version     text NOT NULL,
          description text DEFAULT NULL,
          CONSTRAINT form_unique_compound UNIQUE (code, version),
          PRIMARY KEY (id)
      );

      CREATE TABLE IF NOT EXISTS form_question_option
      (
          id            serial,
          question_code text    NOT NULL,
          option_code   text    NOT NULL,
          form_id       integer NOT NULL,
          PRIMARY KEY (id),
          CONSTRAINT fqo_unique_compound UNIQUE (question_code, option_code, form_id),
          CONSTRAINT fk_form_question_code FOREIGN KEY (question_code) REFERENCES question (code) ON DELETE CASCADE,
          CONSTRAINT fk_form_option_code FOREIGN KEY (option_code) REFERENCES option (code) ON DELETE CASCADE,
          CONSTRAINT fk_form_form_id FOREIGN KEY (form_id) REFERENCES form (id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS disease
      (
          code         text,
          display_name text NOT NULL,
          PRIMARY KEY (code)
      );

      CREATE TABLE IF NOT EXISTS disease_form_option
      (
          disease_code            text          NOT NULL,
          form_question_option_id integer       NOT NULL,
          score                   decimal(5, 2) NOT NULL,
          CONSTRAINT must_be_percentage CHECK (score >= 0 AND score <= 100),
          CONSTRAINT fk_disease_code FOREIGN KEY (disease_code) REFERENCES disease (code) ON DELETE CASCADE,
          CONSTRAINT fk_form_question_option_id FOREIGN KEY (form_question_option_id) REFERENCES form_question_option (id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS recommendation
      (
          code         text,
          display_name text NOT NULL,
          PRIMARY KEY (code)
      );

      CREATE TABLE IF NOT EXISTS disease_recommendation
      (
          disease_code        text          NOT NULL,
          recommendation_code text          NOT NULL,
          threshold           decimal(5, 2) NOT NULL,
          CONSTRAINT must_be_percentage CHECK (threshold >= 0 AND threshold <= 100),
          CONSTRAINT fk_disease_code FOREIGN KEY (disease_code) REFERENCES disease (code) ON DELETE CASCADE,
          CONSTRAINT fk_recommendation_code FOREIGN KEY (recommendation_code) REFERENCES recommendation (code) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS respondent_submission
      (
          id            serial,
          respondent    text    NOT NULL,
          form_id       integer NOT NULL,
          submission    jsonb   NOT NULL,
          gradingResult jsonb   NOT NULL,
          PRIMARY KEY (id),
          CONSTRAINT fk_form_form_id FOREIGN KEY (form_id) REFERENCES form (id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS report_respondent_submission
      (
          submission_id integer NOT NULL,
          answer        integer NOT NULL,
          UNIQUE (submission_id),
          CONSTRAINT fk_answer FOREIGN KEY (answer) REFERENCES form_question_option (id) ON DELETE CASCADE,
          CONSTRAINT fk_submission_id FOREIGN KEY (submission_id) REFERENCES respondent_submission (id) ON DELETE CASCADE
      );

  `)
};


exports.down = async function (knex) {
  await knex.raw(`
      DROP TABLE IF EXISTS report_respondent_submission;
      DROP TABLE IF EXISTS respondent_submission;
      DROP TABLE IF EXISTS disease_recommendation;
      DROP TABLE IF EXISTS recommendation;
      DROP TABLE IF EXISTS disease_form_option;
      DROP TABLE IF EXISTS disease;
      DROP TABLE IF EXISTS form_question_option;
      DROP TABLE IF EXISTS form;
      DROP TABLE IF EXISTS question;
      DROP TABLE IF EXISTS option;
  `);
};


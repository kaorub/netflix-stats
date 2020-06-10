cube(`Degrees`, {
  sql: `SELECT * FROM public.degrees`,

  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [objectId, id, createdAt, updatedAt]
    },
    degreeTypeCount: {
      type: `count`,
      drillMembers: [objectId, id, createdAt, updatedAt],
      filters: [
        { sql: `${CUBE}.degree_type IS NOT NULL` }
      ]
    }
  },

  dimensions: {
    objectId: {
      sql: `object_id`,
      type: `string`
    },

    institution: {
      sql: `institution`,
      type: `string`
    },

    degreeType: {
      sql: `degree_type`,
      type: `string`
    },

    subject: {
      sql: `subject`,
      type: `string`
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },

    graduatedAt: {
      sql: `graduated_at`,
      type: `time`
    }
  }
});

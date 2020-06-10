cube(`Investments`, {
  sql: `SELECT * FROM public.investments`,

  joins: {
    FundingRounds: {
      sql: `${CUBE}.funding_round_id = ${FundingRounds}.funding_round_id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [fundedObjectId, investorObjectId, id, createdAt, updatedAt]
    }
  },

  dimensions: {
    fundedObjectId: {
      sql: `funded_object_id`,
      type: `string`
    },

    investorObjectId: {
      sql: `investor_object_id`,
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

    fundingRoundType: {
      sql: `funding_round_type`,
      type: `string`
    }
  }
});

cube(`FundingRounds`, {
  sql: `SELECT * FROM public.funding_rounds`,
  
  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, objectId, fundingRoundId, createdBy, createdAt, updatedAt]
    },
    
    raisedAmount: {
      sql: `raised_amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    raisedCurrencyCode: {
      sql: `raised_currency_code`,
      type: `string`
    },
    
    objectId: {
      sql: `object_id`,
      type: `string`
    },
    
    fundingRoundType: {
      sql: `funding_round_type`,
      type: `string`
    },
    
    sourceUrl: {
      sql: `source_url`,
      type: `string`
    },
    
    sourceDescription: {
      sql: `source_description`,
      type: `string`
    },
    
    fundingRoundId: {
      sql: `funding_round_id`,
      type: `string`
    },
    
    isLastRound: {
      sql: `is_last_round`,
      type: `string`
    },
    
    preMoneyCurrencyCode: {
      sql: `pre_money_currency_code`,
      type: `string`
    },
    
    fundingRoundCode: {
      sql: `funding_round_code`,
      type: `string`
    },
    
    createdBy: {
      sql: `created_by`,
      type: `string`
    },
    
    postMoneyCurrencyCode: {
      sql: `post_money_currency_code`,
      type: `string`
    },
    
    isFirstRound: {
      sql: `is_first_round`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    fundedAt: {
      sql: `funded_at`,
      type: `time`
    }
  }
});

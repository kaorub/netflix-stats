cube(`Ipos`, {
  sql: `SELECT * FROM public.ipos`,

  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, objectId, createdAt, updatedAt]
    },

    valuationAmount: {
      sql: `valuation_amount`,
      type: `sum`
    },

    raisedAmount: {
      sql: `raised_amount`,
      type: `sum`
    }
  },

  dimensions: {
    valuationCurrencyCode: {
      sql: `valuation_currency_code`,
      type: `string`
    },

    sourceDescription: {
      sql: `source_description`,
      type: `string`
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    stockSymbol: {
      sql: `stock_symbol`,
      type: `string`
    },

    objectId: {
      sql: `object_id`,
      type: `string`
    },

    sourceUrl: {
      sql: `source_url`,
      type: `string`
    },

    raisedCurrencyCode: {
      sql: `raised_currency_code`,
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

    publicAt: {
      sql: `public_at`,
      type: `time`
    }
  }
});

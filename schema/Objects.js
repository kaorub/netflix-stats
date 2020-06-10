cube(`Objects`, {
  sql: `SELECT * FROM public.objects`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [city, normalizedName, createdBy, name, twitterUsername, countryCode, id, parentId, createdAt, updatedAt]
    },
    categoryCodeCount: {
      type: `count`,
      drillMembers: [city, normalizedName, createdBy, name, twitterUsername, countryCode, id, parentId, createdAt, updatedAt],
      filters: [
        { sql: `${CUBE}.category_code IS NOT NULL` }
      ]
    },
  },

  dimensions: {
    region: {
      sql: `region`,
      type: `string`
    },

    city: {
      sql: `city`,
      type: `string`
    },

    tagList: {
      sql: `tag_list`,
      type: `string`
    },

    logoUrl: {
      sql: `logo_url`,
      type: `string`
    },

    normalizedName: {
      sql: `normalized_name`,
      type: `string`
    },

    investedCompanies: {
      sql: `invested_companies`,
      type: `string`
    },

    categoryCode: {
      sql: `category_code`,
      type: `string`
    },

    permalink: {
      sql: `permalink`,
      type: `string`
    },

    stateCode: {
      sql: `state_code`,
      type: `string`
    },

    domain: {
      sql: `domain`,
      type: `string`
    },

    shortDescription: {
      sql: `short_description`,
      type: `string`
    },

    entityType: {
      sql: `entity_type`,
      type: `string`
    },

    overview: {
      sql: `overview`,
      type: `string`
    },

    createdBy: {
      sql: `created_by`,
      type: `string`
    },

    description: {
      sql: `description`,
      type: `string`
    },

    homepageUrl: {
      sql: `homepage_url`,
      type: `string`
    },

    name: {
      sql: `name`,
      type: `string`
    },

    status: {
      sql: `status`,
      type: `string`
    },

    twitterUsername: {
      sql: `twitter_username`,
      type: `string`
    },

    countryCode: {
      sql: `country_code`,
      type: `string`
    },

    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },

    parentId: {
      sql: `parent_id`,
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

    foundedAt: {
      sql: `founded_at`,
      type: `time`
    },

    firstInvestmentAt: {
      sql: `first_investment_at`,
      type: `time`
    },

    firstFundingAt: {
      sql: `first_funding_at`,
      type: `time`
    },

    lastMilestoneAt: {
      sql: `last_milestone_at`,
      type: `time`
    },

    firstMilestoneAt: {
      sql: `first_milestone_at`,
      type: `time`
    },

    closedAt: {
      sql: `closed_at`,
      type: `time`
    },

    lastFundingAt: {
      sql: `last_funding_at`,
      type: `time`
    },

    lastInvestmentAt: {
      sql: `last_investment_at`,
      type: `time`
    }
  }
});

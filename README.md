# Статистика успешности стартапов (Crunchbase 2013 год)

## PRE

### Create Table
```shell script
CREATE TABLE "public".ipos (id smallint, ipo_id smallint, object_id varchar(15), valuation_amount NUMERIC(15, 1),
valuation_currency_code varchar(5), raised_amount NUMERIC(15, 1), raised_currency_code varchar(5), public_at DATE, stock_symbol varchar(31),
source_url varchar(255), source_description varchar(255), created_at DATE, updated_at DATE);
SELECT * FROM .public.ipos;
COPY .public.ipos FROM '/Users/olgamalanova/development/netflix-stats/.public/ipos.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".degrees(id int, object_id varchar(15),degree_type varchar(255),subject varchar(255),institution varchar(255),graduated_at DATE,created_at DATE,updated_at DATE);
COPY .public.degrees FROM '/Users/olgamalanova/development/netflix-stats/.public/degrees.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".acquisitions(id int,	acquisition_id int,	acquiring_object_id varchar(31),	acquired_object_id varchar(31),	term_code varchar(255),	price_amount NUMERIC(15, 1),	price_currency_code varchar(7),	acquired_at DATE,	source_url varchar(255),	source_description varchar(255),	created_at	DATE, updated_at DATE);
COPY .public.acquisitions FROM '/Users/olgamalanova/development/netflix-stats/.public/acquisitions.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".funding_rounds(id int,funding_round_id varchar(31),object_id varchar(31),funded_at DATE,funding_round_type varchar(31),funding_round_code varchar(31),raised_amount_usd NUMERIC(15, 1),raised_amount NUMERIC(15,1),raised_currency_code varchar(7),pre_money_valuation_usd NUMERIC(15,1),pre_money_valuation NUMERIC(15,1),pre_money_currency_code varchar(7),post_money_valuation_usd NUMERIC(15,1),post_money_valuation NUMERIC(15,1),post_money_currency_code varchar(7),participants smallint,is_first_round boolean,is_last_round boolean,source_url varchar(255),source_description varchar(255),created_by varchar(255),created_at DATE,updated_at DATE);
COPY .public.funding_rounds FROM '/Users/olgamalanova/development/netflix-stats/.public/funding_rounds.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".funds(id int,fund_id int,object_id varchar(15),name varchar(255),funded_at DATE,raised_amount numeric(15,1),raised_currency_code varchar(7),source_url varchar(255),source_description varchar(255),created_at DATE,updated_at DATE);
COPY .public.funds FROM '/Users/olgamalanova/development/netflix-stats/.public/funds.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".investments(id int,funding_round_id int,funded_object_id varchar(15),investor_object_id varchar(15),created_at DATE,updated_at date);
COPY .public.investments FROM '/Users/olgamalanova/development/netflix-stats/.public/investments.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".milestones(id int,object_id varchar(15),milestone_at date,milestone_code varchar(255),description varchar(255),source_url varchar(255),source_description varchar(255),created_at date,updated_at date);
COPY .public.milestones FROM '/Users/olgamalanova/development/netflix-stats/.public/milestones.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".objects(id varchar(15),entity_type varchar(255),entity_id int,parent_id varchar(15),name varchar(255),normalized_name varchar(255),permalink varchar(255),category_code  varchar(255),status  varchar(255),founded_at  date,closed_at date,domain  varchar(255),homepage_url varchar(255),twitter_username varchar(255),logo_url varchar(255),logo_width numeric(8,2),logo_height numeric(8,2),short_description  text,description text,overview text,tag_list text,country_code varchar(15),state_code varchar(15),city varchar(255),region varchar(255),first_investment_at date,last_investment_at date,investment_rounds numeric(5, 0),invested_companies text,first_funding_at date,last_funding_at date,funding_rounds numeric(5),funding_total_usd numeric(15, 1),first_milestone_at date,last_milestone_at date,milestones numeric(3),relationships numeric(7),created_by varchar(255),created_at date,updated_at date);
COPY .public.objects FROM '/Users/olgamalanova/development/netflix-stats/.public/objects.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".offices(id int,object_id varchar(15),office_id int,description text,region varchar(255),address1 varchar(255),address2 varchar(255),city varchar(255),zip_code varchar(255),state_code varchar(7),country_code varchar(7),latitude numeric(15, 10),longitude numeric(15, 10),created_at date,updated_at date);
COPY .public.offices FROM '/Users/olgamalanova/development/netflix-stats/.public/offices.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".relationships(id int,relationship_id int,person_object_id varchar(15),relationship_object_id varchar(15),start_at date,end_at date,is_past boolean,sequence text,title text,created_at date,updated_at date);
COPY .public.relationships FROM '/Users/olgamalanova/development/netflix-stats/.public/relationships.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE "public".people(id int,object_id varchar(15),first_name varchar(255),last_name varchar(255),birthplace text,affiliation_name text);
COPY .public.people FROM '/Users/olgamalanova/development/netflix-stats/.public/people.csv' DELIMITER ',' CSV HEADER;
```
### Fill the data
```shell script
COPY public.ipos FROM '/Users/olgamalanova/development/netflix-stats/public/ipos.csv' DELIMITER ',' CSV HEADER;
```
or
```shell script
COPY public.ipos FROM './public/ipos.csv' DELIMITER ',' CSV HEADER;
```

### 

# TODO переделать на yarn
c:1,Company,1,,Wetpaint,wetpaint,/company/wetpaint,web,operating,2005-10-17,,wetpaint-inc.com,http://wetpaint-inc.com,BachelrWetpaint,http://s3.amazonaws.com/crunchbase_prod_assets/assets/images/resized/0000/3601/3601v1-max-250x250.png,401,54,,Technology Platform Company,"Wetpaint is a technology platform company that uses its proprietary state-of-the-art technology and expertise in social media to build and monetize audiences for digital publishers. Wetpaints own online property, Wetpaint Entertainment, an entertainment news site that attracts more than 12 million unique visitors monthly and has over 2 million Facebook fans, is a proof point to the companys success in building and engaging audiences. Media companies can license Wetpaints platform which includes a dynamic playbook tailored to their individual needs and comprehensive training. Founded by Internet pioneer Ben Elowitz, and with offices in New York and Seattle, Wetpaint is backed by Accel Partners, the investors behind Facebook.","wiki, seattle, elowitz, media-industry, media-platform, social-distribution-system",USA,WA,Seattle,Seattle,,,0,0,2005-10-01,2008-05-19,3,39750000.0,2010-09-05,2013-09-18,5,17,initial-importer,2007-05-25 06:51:27,2013-04-13 03:29:00
curl -H "Authorization: bbcef355f32f900529526e69376122ff8a0f33378a8eea5c1d601f2351ca4a85a59029736ed4472df04d8113e660a5d7b90e6c8ad1ccd73540839b11c1931023" localhost:4000/cubejs-api/v1/sql

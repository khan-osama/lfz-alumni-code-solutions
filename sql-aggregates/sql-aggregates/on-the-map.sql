select count("c".*) as "Number of Cities",
       "countries"."name"
  from "cities" as "c"
  join "countries" using ("countryId")
  group by "countries"."countryId"
  order by "countries"."name";

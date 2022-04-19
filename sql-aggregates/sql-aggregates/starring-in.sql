select count("castMembers"."actorId") as "Number of Films",
       "categories"."name" as "Category"
from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "actors"."actorId" = 178
  group by "categories"."name";

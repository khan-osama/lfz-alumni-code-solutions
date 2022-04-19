select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "total amount spent"
from "customers"
  join "rentals" using ("customerId")
  join "payments" using ("rentalId")
  group by "customers"."customerId"
  order by "total amount spent" desc;

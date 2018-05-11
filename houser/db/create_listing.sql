insert into listings
(name, address, city, state, zip, image, mortgage, rent)
values
($1, $2, $3, $4, $5, $6, $7, $8);

select *
from listings;

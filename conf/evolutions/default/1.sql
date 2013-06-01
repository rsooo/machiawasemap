# --- First database schema

# --- !Ups

CREATE TABLE mydatas (
  id SERIAL primary key,
  name char(32),
  mail char(32),
  tel  char(32)
);

# --- !Downs

drop table mydatas;
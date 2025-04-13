use todoappDB

create table dbo.notes(
id bigint identity(1,1),
description nvarchar(max)
)
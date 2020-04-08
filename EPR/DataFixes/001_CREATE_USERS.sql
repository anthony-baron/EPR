if not exists (select * from sysobjects where name='USERS' and xtype='U')

begin
    create table USERS (
		USER_NAME NVARCHAR(64) NOT NULL,
        FIRST_NAME varchar(64) not null,
		LAST_NAME VARCHAR(64) NOT NULL,
		EMAIL NVARCHAR(255) NOT NULL,
		ADDRESS NVARCHAR(MAX) NOT NULL,
		PHONE_NUMBER NVARCHAR(15) NOT NULL
    )
end
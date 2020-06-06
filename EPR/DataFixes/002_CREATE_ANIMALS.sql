if not exists (select * from sysobjects where name='ANIMALS' and xtype='U')

begin
	CREATE TABLE ANIMALS(
		USER_ID NVARCHAR(15) NOT NULL,
		ANIMAL_TYPE_ID INT NOT NULL,
		ANIMAL_CHIP_NUMBER INT NOT NULL,
		ANIMAL_NAME NVARCHAR(64),
		ANIMAL_COLOR NVARCHAR(64),
		ANIMAL_WEIGHT INT,
		ANIMAL_DESCRIPTION NVARCHAR(MAX),
		ANIMAL_MEDICAL_NOTES NVARCHAR(MAX),
		ANIMAL_LATITUDE INT,
		ANIMAL_LONGITUDE INT,
		ANIMAL_RESCUED BIT
	)
end
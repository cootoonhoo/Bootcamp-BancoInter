create table Produtos(
	Codigo				int not null,
	Descricao			varchar(50) not null,
	Data_Validade		datetime,
	Ean					varchar(15) not null,
	Ind_Inativo			int not null default 0

);

Alter table produtos
	add constraint PK_Produtos
		primary key (Codigo)
;
CREATE INDEX IDX_Produtos
		ON Produtos(Ean)
;

INSERT INTO Produtos values (1,'Nome do Produto', getdate(), '1234567890', 0)

select * from Produtos

INSERT INTO Produtos(Codigo, Descricao, Ean) values (2,'Nome do Produto 2 ','1234567891')

SELECT COUNT(*) AS TOTAL
	FROM Produtos

CREATE TABLE Loja(
		Codigo				int not null,
		Nome				varchar(50) not null,
		Ind_Inativo			int  not null default 0,
		Constraint Loja_PK  PRIMARY KEY(Codigo)
)
;


INSERT INTO Loja(Codigo, Nome) values (1000, 'Nova Iguaçu');
INSERT INTO Loja(Codigo, Nome) values (1001, 'Sampa');
INSERT INTO Loja(Codigo, Nome) values (1002, 'Udi');

SELECT * FROM Loja

CREATE TABLE Estoque(
	Codigo_Produto int not null,
	Codigo_Filial int not null,
	Quantidade decimal not null default 0,

	CONSTRAINT Estoque_PK PRIMARY KEY(Codigo_Produto, Codigo_Filial)

);
	ALTER TABLE Estoque
		ADD CONSTRAINT FK_Estoque_Loja
			FOREIGN KEY (Codigo_Produto)
			REFERENCES Produtos(Codigo)

INSERT INTO Estoque(Codigo_Produto, Codigo_Filial, Quantidade) Values (1,101,10)

select * from Estoque

delete from Estoque
	where Codigo_Filial = 10;

	ALTER TABLE Estoque
		ADD CONSTRAINT FK_Estoque_Filial
			FOREIGN KEY (Codigo_Filial)
			REFERENCES LOJA(Codigo)
	;

INSERT INTO Estoque(Codigo_Produto, Codigo_Filial, Quantidade) Values (1,1001,10)

select E.Codigo_Filial, L.Nome, P.Descricao, E.Quantidade 
	from Estoque E
		INNER JOIN LOJA L
			ON E.Codigo_Filial = L.Codigo
		INNER JOIN Produtos P
			on E.Codigo_Produto = P.Codigo
// DISTINCT seleciona valores unicos(removendo valores repetidos);
SELECT DISTINCT job from scott.emp


// Dicas de Ouro para SQL e Oracle
// Prefixos: Sempre que fizer um JOIN, é uma excelente prática prefixar todas as colunas com o apelido da tabela. Isso evita que o código quebre no futuro caso uma nova coluna com o mesmo nome seja adicionada a uma das tabelas.

// Cláusula USING: Como as colunas de junção têm o mesmo nome (deptno), você também poderia usar uma sintaxe mais curta:
SELECT e.ename, d.dname, deptno
FROM scott.emp e JOIN scott.dept d
USING (deptno);

// Nota: Ao usar USING, você não pode prefixar a coluna deptno com o nome da tabela no SELECT.
//da faculdade(errado)
select e.ename, d.dname, e.sal, deptno
from scott.emp e join scott.dept d
on (e.deptno = d.deptno);

//certo(pesquisa e AI e TESTE)
select e.ename, d.dname, e.sal, d.loc, deptno
from scott.emp e join scott.dept d
using(deptno)

//INNER JOIN(INNER: sem obrigação de especificar a palavra INNER, pois é o tipo de JOIN mais comum)

//OUTER JOIN: retornar registros mesmo que não haja correspondência
//na outra tabela. Existem três tipos de OUTER JOIN: LEFT OUTER JOIN, RIGHT OUTER JOIN e FULL OUTER JOIN.

// UNION: Combina os resultados de duas ou mais consultas(tabelas)
// e retorna apenas valores distintos.
SELECT COD_FRUTA_A, NOME_FRUTA_A FROM CONJUNTOA
UNION
SELECT COD_FRUTAB, NOME_FRUTAB FROM CONJUNTOB


// UNION ALL: Combina os resultados de duas ou mais consultas, mas retorna todos os valores, incluindo os duplicados.
SELECT COD_FRUTA_A, NOME_FRUTA_A FROM CONJUNTOA
UNION ALL
SELECT COD_FRUTAB, NOME_FRUTAB FROM CONJUNTOB

// INTERSECT: Retorna apenas os valores que são comuns a ambas as consultas.
SELECT COD_FRUTA_A, NOME_FRUTA_A FROM CONJUNTOA
INTERSECT
SELECT COD_FRUTAB, NOME_FRUTAB FROM CONJUNTOB

// MINUS: Retorna os valores que estão presentes na primeira consulta, mas não na segunda.(A Ordem dos conjuntos é importante, pois o MINUS é assimétrico)
SELECT COD_FRUTA_A, NOME_FRUTA_A FROM CONJUNTOA
MINUS
SELECT COD_FRUTAB, NOME_FRUTAB FROM CONJUNTOB 

// EXCEPT: Retorna os valores que estão presentes na primeira consulta, mas não na segunda, incluindo os duplicados.
SELECT COD_FRUTA_A, NOME_FRUTA_A FROM CONJUNTOA
EXCEPT
SELECT COD_FRUTAB, NOME_FRUTAB FROM CONJUNTOB
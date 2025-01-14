# grupaa-dp

URL: https://github.com/dpavlovic051/grupaa-dp.git

# SQL Upit za vraćanje naslova knjiga određenog autora

SELECT popis_knjiga.naslov
FROM popis_knjiga
INNER JOIN autori ON popis_knjiga.id_autora = autori.id_autora
WHERE autori.ime_prezime = 'Ime Autora'
ORDER BY popis_knjiga.naslov ASC;

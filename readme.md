# ML Crawler
### Crawler desenvolvido para teste na Mundiale

## Instalação das dependências

Use [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para instalar as dependências.

```bash
npm intall
```

ou

```bash
yarn
```

## Configuração do .ENV

Para configurar o .env do projeto basta copiar criar um arquivo com o nome de .env na raiz do projeto como sugere o arquivo .env.example

```env
#PORTA DA API
APP_PORT= PORTA_DA_API

#URL DO MERCADO LIVRE
ML_URL=http://lista.mercadolivre.com.br
```

## Rodando o projeto

Para rodar o projeto basta executar o script start com o [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

```bash
npm start
```

ou

```bash
yarn start
```

## Utilização da API

Para utilizar a api basta fazer uma requisição **POST** para a rota **/products** com o seguinte corpo:

```json
{
  "search": "cadeado", //string de pesquisa
  "limit": 2 //numero de resultados
}
```

Exemplo de resposta:

```json
{
  "length": 2,
  "data": [
    {
      "name": "Cadeado Em Latão De 20 Mm Pado",
      "link": "https://produto.mercadolivre.com.br/MLB-1165417082-cadeado-em-lato-de-20-mm-pado-_JM#position=1&type=item&tracking_id=74b837a8-a9b9-40a9-8dbb-0e0526f74c00",
      "price": 11,
      "store": "Dutra Maquinas",
      "state": null
    },
    {
      "name": "Cadeado Mesmo Segredo 25mm Zamac Stam",
      "link": "https://produto.mercadolivre.com.br/MLB-1051471391-cadeado-mesmo-segredo-25mm-zamac-stam-_JM?searchVariation=32155276831#searchVariation=32155276831&position=2&type=item&tracking_id=74b837a8-a9b9-40a9-8dbb-0e0526f74c00",
      "price": 22.8,
      "store": "O Construtor",
      "state": null
    }
  ]
}
```

## Lais Cookie Consent

Widget de consentimento de cookies do LAIS

### Como usar

Adicione o script do Lais Cookie Consent antes do final do `</body>`
```html
<html>
    <head> <!-- conteúdo do head --> </head>
    <body>
        <!-- conteúdo do body -->
        <script defer src="<caminho-para-o-lais-cookie-consent.js>"></script>
    </body>
</html>
```

Para desativar um script que utiliza algum tipo de cookie, adicione `type="text/plain"` e `data-cookiecategory=CATEGORIA`
à tag do script. Por exemplo:
```html
<script type="text/plain" data-cookiecategory="analytics" src="https://www.googletagmanager.com/gtag/js?id=G-AAAAAAA" async></script>
```

### Categorias de Cookies

Por padrão é adicionado uma categoria para cookies essencias.

| Categoria     | Descrição                                                                                      |
|---------------|:-----------------------------------------------------------------------------------------------|
| analytics     | Use para scripts que coletam dados para estatiscas e/ou performance. Exemplo: Google Analytics |
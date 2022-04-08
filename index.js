import 'vanilla-cookieconsent';
import ccStyle from 'vanilla-cookieconsent/dist/cookieconsent.css';

const logo = `
<svg height="30" viewBox="0 0 356 111" fill="none">
    <path d="M132.53 17.0697H138.397C139.784 17.0697 140.904 18.1898 140.904 19.5767V82.2809C140.904 83.161 141.598 83.8545 142.478 83.8545H179.684C181.071 83.8545 182.191 84.9747 182.191 86.3616V90.8157C182.191 92.2026 181.071 93.3228 179.684 93.3228H132.53C131.143 93.3228 130.022 92.2026 130.022 90.8157V19.5767C130.022 18.1898 131.143 17.0697 132.53 17.0697Z" fill="#055B8D"/>
    <path d="M242.629 74.2795H204.195C203.555 74.2795 202.995 74.6529 202.728 75.2397L195.42 91.8558C195.02 92.7627 194.113 93.3494 193.127 93.3494H187.446C185.632 93.3494 184.405 91.4558 185.152 89.8021L217.424 18.5632C217.824 17.6564 218.731 17.0963 219.718 17.0963H227.266C228.253 17.0963 229.133 17.6831 229.56 18.5632L261.885 89.8021C262.632 91.4558 261.432 93.3494 259.591 93.3494H253.697C252.71 93.3494 251.803 92.7627 251.403 91.8558L244.095 75.2397C243.829 74.6529 243.242 74.2795 242.629 74.2795ZM239.081 63.8244L224.519 30.7787C224.092 29.7918 222.678 29.7918 222.252 30.7787L207.689 63.8244C207.316 64.6512 207.929 65.558 208.836 65.558H237.934C238.841 65.558 239.455 64.6512 239.081 63.8244Z" fill="#055B8D"/>
    <path d="M274.741 17.0697H280.608C281.995 17.0697 283.115 18.1898 283.115 19.5767V90.8157C283.115 92.2026 281.995 93.3228 280.608 93.3228H274.741C273.354 93.3228 272.234 92.2026 272.234 90.8157V19.5767C272.207 18.1898 273.354 17.0697 274.741 17.0697Z" fill="#055B8D"/>
    <path d="M309.013 91.5358C304.533 90.0422 300.852 88.1752 297.971 85.9348C297.038 85.2147 296.745 83.9345 297.251 82.8677L299.092 79.0003C299.758 77.6134 301.519 77.08 302.799 77.9868C305.279 79.7738 308.24 81.2674 311.627 82.4943C316.161 84.1212 320.829 84.948 325.629 84.948C331.951 84.948 336.671 83.8812 339.792 81.7208C342.912 79.5871 344.486 76.7333 344.486 73.1593C344.486 70.5455 343.633 68.4118 341.926 66.7849C340.219 65.1579 338.112 63.9044 335.605 63.0242C333.097 62.1441 329.55 61.1839 324.989 60.0904C319.255 58.7035 314.614 57.3432 311.094 55.9563C307.573 54.5694 304.559 52.4624 302.052 49.5819C299.545 46.7014 298.291 42.8341 298.291 37.9799C298.291 33.9259 299.358 30.2452 301.519 26.9647C303.652 23.6841 306.906 21.0703 311.28 19.1233C315.628 17.1496 321.042 16.1895 327.523 16.1895C332.031 16.1895 336.458 16.7763 340.805 17.9231C344.326 18.8566 347.447 20.1369 350.167 21.7371C351.261 22.3772 351.687 23.7108 351.207 24.8577L349.5 28.965C348.94 30.3519 347.287 30.912 345.98 30.2186C343.499 28.885 340.885 27.7915 338.165 27.018C334.538 25.9779 330.964 25.4444 327.496 25.4444C321.309 25.4444 316.695 26.5646 313.601 28.8317C310.507 31.072 308.96 33.9792 308.96 37.5532C308.96 40.167 309.84 42.3007 311.574 43.9276C313.307 45.5545 315.468 46.8348 318.055 47.7416C320.642 48.6484 324.136 49.6086 328.563 50.6221C334.298 52.009 338.912 53.3959 342.406 54.7561C345.9 56.143 348.887 58.2501 351.394 61.0772C353.901 63.9044 355.155 67.7184 355.155 72.5192C355.155 76.5199 354.061 80.1739 351.874 83.4811C349.687 86.7883 346.38 89.4021 341.952 91.3225C337.525 93.2428 332.084 94.203 325.603 94.203C319.869 94.203 314.348 93.3228 309.013 91.5358Z" fill="#055B8D"/>
    <path d="M106.178 50.8887C103.805 50.8887 101.858 52.8357 101.858 55.2095C101.858 80.8939 80.974 101.804 55.2629 101.804C35.7395 101.804 18.1631 89.4821 11.4686 71.1589C10.6418 68.9185 8.16142 67.7717 5.92103 68.5718C3.68065 69.3986 2.53378 71.879 3.33392 74.1194C11.2553 95.8565 32.1122 110.446 55.2362 110.446C85.6948 110.446 110.472 85.668 110.472 55.2095C110.499 52.8357 108.552 50.8887 106.178 50.8887Z" fill="#055B8D"/>
    <path d="M106.178 50.8888H80.2005L70.8389 29.9518C70.1187 28.3515 68.5184 27.3647 66.7315 27.3914C64.9712 27.4447 63.4242 28.5649 62.8108 30.2452L52.169 59.5036L44.0876 39.3401C43.4475 37.7398 41.9005 36.673 40.0602 36.6196C38.3799 36.6196 36.833 37.6065 36.1129 39.1534L30.7787 50.9154H4.32073C1.94699 50.9154 0 52.8624 0 55.2362C0 57.6099 1.94699 59.5569 4.32073 59.5569H33.5525C35.2595 59.5569 36.7797 58.5701 37.4998 57.0232L39.7936 51.9556L48.3017 73.2126C48.9685 74.8662 50.5421 75.9331 52.3024 75.9331H52.3557C54.1427 75.9064 55.743 74.7596 56.3564 73.0793L67.2382 43.2341L73.3993 56.9965C74.0927 58.5434 75.6397 59.5569 77.3467 59.5569H106.125C108.499 59.5569 110.446 57.6099 110.446 55.2362C110.499 52.8358 108.552 50.8888 106.178 50.8888Z" fill="#055B8D"/>
    <path d="M107.191 36.3262C99.2696 14.5892 78.4127 0 55.2887 0C24.8302 0 0.0524902 24.7776 0.0524902 55.2362C0.0524902 57.6099 1.99956 59.5569 4.3733 59.5569C6.74705 59.5569 8.69403 57.6099 8.69403 55.2362C8.69403 29.5518 29.5776 8.6415 55.2887 8.6415C74.8121 8.6415 92.3884 20.9636 99.0829 39.2868C99.483 40.3803 100.283 41.2338 101.323 41.7405C102.363 42.2206 103.537 42.2739 104.631 41.8739C105.724 41.4738 106.578 40.6737 107.058 39.6335C107.538 38.5666 107.564 37.3931 107.191 36.3262Z" fill="#055B8D"/>
</svg>
`;

const CATEGORIES_SETTINGS = [
    {
        title: 'Cookies de performance e estatísticas',
        description: 'Esses cookies permitem que o site se lembre das escolhas que você fez no passado',
        toggle: {
            value: 'analytics',
            enabled: false,
            readonly: false
        },
        cookie_table: [
            {
                col1: '^_ga',
                col2: 'google.com',
                col3: '2 anos',
                col4: 'descrição ...',
                is_regex: true
            },
            {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 dia',
                col4: 'descrição ...',
            }
        ]
    },
    // {
    //     title: 'Outro tipo de categoria de cookies',
    //     description: 'Descrição do que o cookie faz',
    //     toggle: {
    //         value: 'targeting',
    //         enabled: false,
    //         readonly: false
    //     }
]

window.addEventListener('load', function () {
    // adiciona o css do vanilla-cookieconsent ao documento
    const style = document.createElement('style');
    document.head.append(style);
    style.textContent = ccStyle;

    // recupera todos os scripts com data-cookiecategory
    const els = document.querySelectorAll("script[data-cookiecategory][type='text/plain']");
    // mapeia para ter uma lista das categorias apenas
    const categories = Array.from(els).map(el => el.dataset.cookiecategory);
    // remove categorias duplicadas
    const dedupedCategories = [...new Set(categories)];

    // filtra as configurações de categorias para somente aquelas que foram encontradas na página
    const filteredCategoriesSettings = CATEGORIES_SETTINGS.filter((cs) => dedupedCategories.includes(cs.toggle.value));

    const cc = initCookieConsent();

    cc.run({
        current_lang: 'pt-BR',
        cookie_name: 'lais_cookieconsent',
        // auto_language: null,                         // default: null; could also be 'browser' or 'document'
        // autoclear_cookies : true,                    // default: false
        page_scripts: true,
        // delay: 0,                                // default: 0
        // force_consent: false,
        // remove_cookie_tables: false              // default: false

        gui_options: {
            consent_modal: {
                layout: 'box',                      // box,cloud,bar
                position: 'bottom right',           // bottom,middle,top + left,right,center
                transition: 'slide'                 // zoom,slide
            },
            settings_modal: {
                layout: 'box',                      // box,bar
                // position: 'left',                // right,left (available only if bar layout selected)
                transition: 'slide'                 // zoom,slide
            }
        },

        languages: {
            'pt-BR': {
                consent_modal: {
                    title: 'Nós usamos cookies! ',
                    description: 'Olá, este site usa cookies essenciais para garantir seu bom funcionamento e cookies de rastreamento para entender como você interage com ele. Este último será definido somente após o consentimento. <button type="button" data-cc="c-settings" class="cc-link">Deixe-me escolher</button>',
                    primary_btn: {
                        text: 'Aceitar todos',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Rejeitar todos',
                        role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: logo,
                    save_settings_btn: 'Salvar configurações',
                    accept_all_btn: 'Acietar todos',
                    reject_all_btn: 'Rejeitar todos',
                    close_btn_label: 'Fechar',
                    cookie_table_headers: [
                        {col1: 'Nome'},
                        {col2: 'Domínio'},
                        {col3: 'Expiração'},
                        {col4: 'Descrição'}
                    ],
                    blocks: [
                        {
                            title: 'Uso de cookies',
                            description: 'Nós usamos cookies para garantir as funcionalidades básicas do site e melhorar sua experiência online. Você pode escolher cada categoria para ativar/desativar sempre que quiser. Para obter mais detalhes relativos a cookies e outros dados confidenciais, leia a <a href="https://lais.huol.ufrn.br/politica-de-privacidade" class="cc-link">política de privacidade</a> completa.'
                        }, {
                            title: 'Cookies estritamente necessários',
                            description: 'Esses cookies são essenciais para o bom funcionamento do site. Sem esses cookies, o site não funcionaria corretamente',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true
                            }
                        },
                        ...filteredCategoriesSettings,
                        {
                            title: 'Mais informações',
                            description: 'Para qualquer dúvida em relação à nossa política de cookies e suas escolhas, entre em <a class="cc-link" href="https://lais.huol.ufrn.br/contato">contato conosco</a>.',
                        }
                    ]
                }
            }
        }
    });
});
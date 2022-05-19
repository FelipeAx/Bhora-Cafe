const refeicoes = [
    {nome: 'FRANGO', valor: '15,00', descricao: 'Frango, Arroz, Feijão, Macarrão, Legumes, Farofa e Salada.'},
    {nome: 'CARNE', valor: 'R$ 18,00', descricao: 'Carne, Arroz, Feijão, Macarrão, Legumes, Farofa e Salada.'},
    {nome: 'PEIXE', valor: 'R$ 18,00', descricao: 'Peixe, Arroz, Feijão, Macarrão, Legumes, Farofa e Salada.'},
    {nome: 'A LA MINUTA', valor: 'R$ 18,00', descricao: 'Proteína, Arroz, Feijão, Batata Frita e Salada.'},
    {nome: 'PRATO DO DIA', valor: 'R$ 20,00', descricao: 'Consulte a opção do dia.'},
]

const acompanhamentosParaOhCafe = [
    {nome: 'MISTO QUENTE', valor: 'R$ 7,00', descricao: 'Pão, queijo e presunto'},
    {nome: 'MISTO QUENTE PEITO DE PERU', valor: 'R$ 7,50', descricao: 'Pão, queijo, peito de peru'},
    {nome: 'MISTO FRIO', valor: 'R$ 6,50', descricao: 'Pão, queijo e presunto'},
    {nome: 'MISTO FRIO PEITO DE PERU', valor: 'R$ 7,00', descricao: 'Pão, queijo, peito de peru'},
    {nome: 'TAPIOCA', valor: 'R$ 10,00', descricao: 'Presunto e queijo'},
    {nome: 'TAPIOCA DA CASA', valor: 'R$ 12,00', descricao: 'Queijo, tomate e orégano'},
    {nome: 'TAPIOCA DOCE', valor: 'R$ 10,00', descricao: 'Creme de avelã com chocolate'},
    {nome: 'CREPIOCA', valor: 'R$ 10,00', descricao: 'Presunto e queijo'},
    {nome: 'CREPIOCA DA CASA', valor: 'R$ 12,00', descricao: 'Queijo, tomate e orégano'},
    {nome: 'PASTEL', valor: 'R$ 8,00', descricao: '135g de recheio de carne ou palmito'},
    {nome: 'PASTEL CAMARÃO', valor: 'R$ 10,00', descricao: '135g de recheio de camarão'},
    {nome: 'EMPANADA', valor: 'R$ 8,00', descricao: '160g de recheio'},
    {nome: 'SALGADOS', valor: 'R$ 8,00', descricao: 'Salgados diversos'},
];
const ovosEhOmeletes = [
    {nome: 'OVOS MEXIDOS SIMPLES', valor: 'R$ 8,00', descricao: 'Ovos, queijo e manteiga'},
    {nome: 'OVOS MEXIDOS COMPLETO', valor: 'R$ 10,00', descricao: 'Ovos, presunto, queijo e manteiga'},
    {nome: 'OMELETE SIMPLES', valor: 'R$ 10,00', descricao: 'Ovos, queijo e manteiga'},
    {nome: 'OMELETE COMPLETO', valor: 'R$ 12,00', descricao: 'Ovos, presunto, queijo e manteiga'}
];
const bebidasFrias = [
    {nome: 'REFRIGERANTE LATA', valor: 'R$ 5,00', descricao: ''},
    {nome: 'SUCO LATA', valor: 'R$ 5,00', descricao: ''},
    {nome: 'REFRIGERANTE 600ML', valor: 'R$ 7,00', descricao: ''},
    {nome: 'ÁGUA SEM GÁS', valor: 'R$ 4,00', descricao: ''},
    {nome: 'ÁGUA COM GÁS', valor: 'R$ 4,50', descricao: ''},
    {nome: 'SUCO NATURAL E POUPA', valor: 'R$ 7,00', descricao: 'Consulte nossas opções'},
    {nome: 'CERVEJA 600', valor: 'R$ 15,00', descricao: 'Consulte nossas opções'},
    {nome: 'CERVEJA LONG NECK', valor: 'R$ 10,00', descricao: 'Consulte nossas opções'},
];
const hamburgueres = [
    {
        nome: 'Bhora Burger', valor: 'R$ 32,00', 
        descricao: 'Delicioso hambúrguer artesanal de carne de bovina com cebolas caramelizadas, acompanha queijo gorgonzola, tomate, alface, maionese temperada.'
    },
    {
        nome: 'Bacon Burger', 
        valor: 'R$ 30,00', 
        descricao: 'Delicioso hambúrguer artesanal de carne bovina com bacon, acompanha queijo cheddar, tomate, alface  americana, maionese temperada.'
    },
    {
        nome: 'Pig Burger', 
        valor: 'R$ 30,00', 
        descricao: 'Delicioso hambúrguer artesanal de carne suína, acompanha creme e gorgonzola, abacaxi grelhado, cebolas caramelizadas, alface americana, maionese temperada.'
    },
    {
        nome: 'Chiken Burger', 
        valor: 'R$ 28,00', 
        descricao: 'Delicioso hambúrguer artesanal de frango, acompanha queijo provolone, rúcula, tomate, cebola roxa, maionese temperada.'
    },
    {
        nome: 'Veggie Burger', 
        valor: 'R$ 28,00', 
        descricao: 'Delicioso hambúrguer vegetariano com cebolas caramelizadas, acompanha queijo gorgonzola, tomate, alface, maionese temperada.'
    },
    {
        nome: 'Classic Burger', 
        valor: 'R$ 25,00', 
        descricao: 'Delicioso hambúrguer artesanal de carne bovina, acompanha queijo cheddar, tomate, alface americana,maionese temperada.'
    }
];


const bebidasQuentes = [
    {nome: 'EXPRESSO 50ML/30ML', valor: 'R$ 5,00', descricao: 'Café do Mercado'},
    {nome: 'CARIOCA 50ML', valor: 'R$ 5,00', descricao: 'Café do Mercado'},
    {nome: 'EXPRESSO DUPLO', valor: 'R$ 6,50', descricao: 'Café do Mercado'},
    {nome: 'MICHIATO 100ML', valor: 'R$ 8,00', descricao: 'Café com leite'},
    {nome: 'CAPPUCCINO', valor: 'R$ 12,00', descricao: 'Café do Mercado'},
    {nome: 'CAPPUCCINO PEQUENO', valor: 'R$ 8,00', descricao: 'Café do Mercado'},
    {nome: 'MOCHA', valor: 'R$ 12,00', descricao: 'Café, leite e chocolate'}, 
    {nome: 'MOCHA PEQUENO', valor: 'R$ 8,00', descricao: 'Café, leite e chocolate'},
    {nome: 'CHOCOLATE QUENTE', valor: 'R$ 12,00', descricao: 'Da Vinci'},
    {nome: 'CAPPUCCINO ITALIANO', valor: 'R$ 10,00', descricao: 'Café com leite'},
    {nome: 'FRAPPÉ', valor: 'R$ 12,00', descricao: 'Café do Mercado'},
    {nome: 'CHÁ', valor: 'R$ 5,00', descricao: 'Diversos'},
];

const porcoes = [
    {nome: 'POLENTA FRITA', valor: 'R$ 20,00', descricao: '500g de polentas (acompanha maionese da casa).'},
    {nome: 'BATATA FRITA', valor: 'R$ 20,00', descricao: '500g de batatas (acompanha maionese da casa).'},
    {nome: 'CALABRESA', valor: 'R$ 20,00', descricao: '500g de calabresa acebolada, salsa (acompanha pão e farofa).'},
    {nome: 'ISCAS DE CARNE', valor: 'R$ 20,00', descricao: '500g de iscas de alcatra acebolada, salsa e molho shoyu (acompanha pão e farofa).'},
];

$( document ).ready(function() {
    refeicoes.map(item => $("#refeicoes").append(montaDivItemCardapio(item)));
    porcoes.map(item => $("#porcoes").append(montaDivItemCardapio(item)));
    ovosEhOmeletes.map(item => $("#ovosEhOmeletes").append(montaDivItemCardapio(item)));
    bebidasQuentes.map(item => $("#bebidasQuentes").append(montaDivItemCardapio(item)));
    acompanhamentosParaOhCafe.map(item => $("#acompanhamentosParaOhCafe").append(montaDivItemCardapio(item)));
    bebidasFrias.map(item => $("#bebidasFrias").append(montaDivItemCardapio(item)));
    hamburgueres.map(item => $("#hamburgueres").append(montaDivItemCardapio(item)));
});

function montaDivItemCardapio(item) {
    let div = '';
    if (item.descricao) {
        div =  `<div class="item-mainmenu m-b-36"><div class="flex-w flex-b m-b-3"><a href="#" class="name-item-mainmenu txt21">
        ${item.nome}</a><div class="line-item-mainmenu bg3-pattern"></div><div class="price-item-mainmenu txt22">
        ${item.valor}</div></div><span class="info-item-mainmenu txt23">${item.descricao}</span></div>`;
    } else {
        div =  `<div class="item-mainmenu m-b-36"><div class="flex-w flex-b m-b-3"><a href="#" class="name-item-mainmenu txt21">
        ${item.nome}</a><div class="line-item-mainmenu bg3-pattern"></div><div class="price-item-mainmenu txt22">
        ${item.valor}</div></div></div>`;
    }

    return div;
}



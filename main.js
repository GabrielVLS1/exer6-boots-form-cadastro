$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira seu telefone.'
        }
    })
})
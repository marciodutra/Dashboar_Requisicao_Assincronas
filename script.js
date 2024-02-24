$(document).ready(() => {

	$('#dashboard').on('click', () => {
		
		$.post('home.html', data => { 
			$('#pagina').html(data)
		})
	})
	
	$('#documentacao').on('click', () => {
		
		$.post('documentacao.html', data => { 
			$('#pagina').html(data)
		})
	})

	$('#suporte').on('click', () => {
		
		$.post('suporte.html', data => { 
			$('#pagina').html(data)
		})
	})


	//ajax
	$('#competencia').on('change', e => {

		let competencia = $(e.target).val()
		
		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`, //x-www-form-urlencoded
			dataType: 'json',
			success: dados => { 
				$('#numeroVendas').html(dados.numeroVendas)
				$('#totalVendas').html(dados.totalVendas)
			},
			error: erro => { console.log(erro) }
		})

		//método, url, dados, sucesso, erro
	})
})
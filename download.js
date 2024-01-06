async function baixarImagem() {
    try {
        const resposta = await fetch("OIG (9).jpg");
        if (!resposta.ok) {
            throw new Error("Erro na rede ao tentar baixar a imagem");
        }
        const blob = await resposta.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "imagem.jpg";
        document.body.appendChild(a);
        a.click();
        // Remova o link do DOM e revogue o URL do objeto
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    } catch (erro) {
        console.error("Erro ao baixar o arquivo:", erro);
    }
}

document.getElementById('download').addEventListener('click', baixarImagem);

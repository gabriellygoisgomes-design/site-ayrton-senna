function pesquisar() {

    const texto = document
        .getElementById("campoPesquisa")
        .value
        .toLowerCase()
        .trim();

    if (texto === "") {
        alert("Digite algo para pesquisar.");
        return;
    }

    const conteudo = document.body.innerText.toLowerCase();

    if (conteudo.includes(texto)) {

        alert("Encontramos informações sobre: " + texto);
        if (
            texto.includes("curso") ||
            texto.includes("nem") ||
            texto.includes("des") ||
            texto.includes("adm") ||
            texto.includes("administração") ||
            texto.includes("sistemas")
        ) {
            document
                .getElementById("cursos")
                .scrollIntoView({
                    behavior: "smooth"
                });
        }

        else if (
            texto.includes("sobre") ||
            texto.includes("escola") ||
            texto.includes("instituição")
        ) {
            document
                .getElementById("sobre")
                .scrollIntoView({
                    behavior: "smooth"
                });
        }

        else if (
            texto.includes("contato") ||
            texto.includes("telefone") ||
            texto.includes("email") ||
            texto.includes("e-mail")
        ) {
            document
                .getElementById("contato")
                .scrollIntoView({
                    behavior: "smooth"
                });
        }

    } else {

        alert("Não encontramos informações sobre: " + texto);

    }
}
document
    .getElementById("campoPesquisa")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            pesquisar();
        }

    });
function mostrarCurso(curso) {

    alert(
        "Você selecionou o curso:\n\n" +
        curso +
        "\n\nEm breve teremos mais informações."
    );

}
document
    .getElementById("formularioContato")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document
            .getElementById("nome")
            .value;

        alert(
            "Obrigado, " + nome +
            "!\n\nSua mensagem foi enviada com sucesso."
        );
        document
            .getElementById("formularioContato")
            .reset();

    });
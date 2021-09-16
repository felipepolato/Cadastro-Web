import React from "react";

export default function FormRegisters() {
  return (
    <form type="submit">
      <label>
        Nome
        <input name="name" type="text" required />
      </label>

      <label>
        E-mail
        <input name="email" type="email" required />
      </label>
      <p>Endereço do Usuário</p>

      <label>
        País
        <input name="pais" type="text" required />
      </label>

      <label>
        Município
        <input name="municiopio" type="text" required />
      </label>

      <label>
        Estado
        <input name="estado" type="text" required />
      </label>

      <label for="CEP">
        CEP:
        <input name="CEP" id="CEP" required pattern="\d{5}-\d{3}" />
      </label>

      <label for="PIS">
        PIS:
        <input name="PIS" id="PIS" required />
      </label>

      <label>
        Senha:
        <input name="password" type="password" required />
      </label>

      <button>Enviar</button>
    </form>
  );
}

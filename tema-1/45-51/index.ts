import axios, { AxiosResponse } from "axios";

const ENDPOINT = "https://api.github.com";

type Usuario = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  site_admin: boolean;
};

async function obtenerUsuariosGithub(): Promise<Usuario[] | undefined> {
  try {
    const respuesta: AxiosResponse = await axios.get(`${ENDPOINT}/users`);
    return respuesta.data;
  } catch (error) {
    console.error(error);
  }
}

obtenerUsuariosGithub().then((users) => {
  console.log("Lista de usuarios:", users);
});

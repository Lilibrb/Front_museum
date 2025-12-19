import { createClient } from "@supabase/supabase-js";
//Définition de la classe
class Home {
  constructor() {
    this.initSupabase();
    this.getData();
  }

  initSupabase() {
    this.supabase = createClient(
      "https://nsgnuhtvvkaxchkzqtrs.supabase.co",
      "sb_publishable_sxRnIDEPHjrakm0hdbf0WA_8gqdYRrT"
    );

    console.log(this.supabase);
  }

  async getData() {
    const ValeurDeRetour = await this.supabase.from("utilisateurs").select();

    console.log(ValeurDeRetour);

    ValeurDeRetour.data.forEach((element) => createAlbums(element));
  }
}

function createAlbums(element) {
  //const li = document.createElement("li");
  //li.style.border = "1px solid red";

   const img = document.createElement("img");
  img.src = element.image;
  document.body.appendChild(img);

  img.classList.add("albumimage");

    const p = document.createElement("h2");
  p.innerText = element.artiste;
  document.body.appendChild(p);
  console.log(element);

  //p.style.border = "1px solid red";

  const albums = document.createElement("div");
  albums.classList.add("Pochette");
  document.body.appendChild(albums);

  const div = document.createElement("p");
  div.innerText = element.nom;
  document.body.appendChild(div);

  div.style.fontWeight = "bold";
  //div.style.backgroundColor = "lightgrey";

  const div2 = document.createElement("p");
  div2.innerText = element.titre;
  document.body.appendChild(div2);

  div2.style.fontWeight = "bold";

  const div3 = document.createElement("p");
  div3.innerText = element.date;
  document.body.appendChild(div3);

  div3.style.fontWeight = "bold";

  const div4 = document.createElement("p");
  div4.innerText = element.prix;
  document.body.appendChild(div4);

  div4.style.fontWeight = "bold";

  albums.appendChild(div);
  albums.appendChild(div2);
  albums.appendChild(div3);
  albums.appendChild(div4);
}

// appelerAuTelephone('laurent')

// appelerAuTelephone('patrick')

// appelerAuTelephone('laure')

// }

// appelerAuTelephone(prenom) {
//     console.log('hello', prenom)
// }

new Home();

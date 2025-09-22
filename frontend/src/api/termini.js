/*export const getTerminiA = async () => {
  const response = await fetch("http://localhost:5000/api/termini/a");
  console.log("pozvana ruta /api/termini/a")
  if (!response.ok) throw new Error("Greška pri pozivu backend-a");
  return response.json();
};*/


export const getTermini = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/termini/a");
    console.log("Pozvana ruta /api/termini/a");

    if (!response.ok) {
      throw new Error("Greška pri pozivu backend-a");
    }

    const data = await response.json(); // ovo je niz instruktora
    console.log("Termini iz baze:", data);
    return data; 
  } catch (error) {
    console.error("Greška pri dohvaćanju termina:", error);
    throw error;
  }
};
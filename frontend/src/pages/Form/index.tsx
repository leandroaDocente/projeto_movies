import { count } from 'console';
import { title } from 'process';

function Form() {
  const movies = {
    id: 1,
    image:
      'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg',
    title: 'Os fantasmas ainda se divertem: Beetlejuice Beetlejuice',
    count: 2,
    score: 4.0,
  };
  return (
    <div className="movies-form-cotainer">
      <img
        src={movies.image}
        alt="Os fantasmas ainda se divertem: Beetlejuice Beetlejuice"
      />
      <div className="movies-card-bottom-container">
        <h3>Os fantasmas ainda se divertem: Beetlejuice Beetlejuice</h3>
        <form className="movies-form">
          <div className="form-group movies-form-group">
            <label htmlFor="email">Informe seu e-mail</label>
            <input className="form-control" type="email" id="email" />
          </div>
          <div className="form-group movies-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="movies-form-btn-container" />
          <button className="btn movies-btn" type="submit">
            SALVAR
          </button>
        </form>
        <button className="btn movies-btn mt-3">CANCELAR</button>
      </div>
    </div>
  );
}

export default Form;

export default function MesaCard({ mesa }) {

    const { numero, capacidad, estado, comensales } = mesa;

    return (

        <div className={`card ${estado}`}>

            <h3>Mesa {numero}</h3>

            <p>Capacidad: {capacidad}</p>

            <p>Comensales: {comensales}</p>

            <p>
                {estado === "libre" && "🟢 Libre"}
                {estado === "ocupada" && "🔴 Ocupada"}
                {estado === "reservada" && "🟡 Reservada"}
            </p>

        </div>

    );
}
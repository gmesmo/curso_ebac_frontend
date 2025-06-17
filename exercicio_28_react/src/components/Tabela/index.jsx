import styles from "./Tabela.module.css";

const Tabela = ({ peso, altura }) => {
    const imc = peso / (altura * altura);

    return (
        <>
            <h3>Seu IMC é: {imc.toFixed(2)}</h3>
            <p>E aparece destacado abaixo</p>
            <ul>
                <li className={imc < 18.5 && `${styles.imc}`}>Magreza</li>
                <li className={imc >= 18.5 && imc < 24.9 && `${styles.imc}`}>
                    Normal
                </li>
                <li className={imc >= 24.9 && imc < 29.9 && `${styles.imc}`}>
                    Sobrepeso
                </li>
                <li className={imc >= 30 && `${styles.imc}`}>Obesidade</li>
                <li className={imc >= 40 && `${styles.imc}`}>
                    Obesidade Grave
                </li>
            </ul>
        </>
    );
};

export default Tabela;

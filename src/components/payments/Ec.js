import React, { useState } from "react";
import LogoBC from "../../img/logo-blanco.png";
import PayCash from "../../img/PayCash.jpg";
import Puntopago from "../../img/Punto_Pago.jpg";
import Tarjetas from "../../img/Tarjetas.jpg";
import Banktransfer from "../../img/Bank_transfer.jpg";
import Retirotarjeta from "../../img/Pay_to_card.jpg";

const imagesDepositos = [
  {
    img: PayCash,
    title: "PAYCASH",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/paycash-panama/",
    min: "$10.00",
    max: "$200.00",
    time: "-",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tienda de conveniencia', seguido selecciona la opción 'Pagar en efectivo', ingresa el monto a depositar y selecciona la opción 'Generar referencia', el sistema te brindará un código de 16 dígitos que debes copiar, luego debes presentarte en la tienda de conveniencia y brindar al cajero el número de referencia y el dinero a pagar (el monto debe ser el mismo que digitaste en el cajero en línea de Betcris), ahora solo debes guardar el recibo como comprobante de pago.",
  },
  {
    img: Puntopago,
    title: "PUNTO PAGO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/punto-pago/",
    min: "$1.00",
    max: "$1,000.00",
    time: "-",
    descriptionTitle: "En el quiosco de Punto Pago:",
    description:
      "En el quiosco de Punto Pago, busca el botón 'Betcris', seguido ingresa tu número de cuenta 'PANXXXX', revisa y confirma tus datos personales, luego ingresa el monto a recargar, haz clic en opción 'Pagar', y se te dará un recibo que confirma tu transacción.",
  },
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/tarjetas-de-credito-y-debito/",
    min: "$10.00",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
];

const imagesRetiros = [
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/retiros/transferencia-bancaria-local/",
    min: "$10.00",
    max: "$10,000.00",
    time: "7 días",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Retiro, selecciona 'Transferencia Bancaria', ingresa el monto de tu retiro, seguido ingresa la información de tu cuenta bancaria para tu primer retiro por este método (tus datos serán guardados para la próxima vez), finalmente selecciona 'Retirar'.",
  },
  {
    img: Retirotarjeta,
    title: "TARJETA - VISA DIRECT",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/retiros/retiro-a-tarjeta/",
    min: "$10.00",
    max: "-",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Selecciona 'VISA Direct / Retiro a tarjeta', ingresa la cantidad deseada, seguido agrega la información de tu tarjeta: Tu nombre tal como se muestra en la tarjeta, el número de 16 dígitos, la fecha de vencimiento, tu dirección de correo electrónico, número de teléfono, cantidad solicitada y finalmente selecciona 'Retirar'.",
  },
];

const EC = () => {
  const [showDepositos, setShowDepositos] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDepositosClick = () => {
    setShowDepositos(true);
  };

  const handleRetirosClick = () => {
    setShowDepositos(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen">
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>
      <div className="p-7 flex flex-col justify-center items-center ">
        {/* Payment buttons */}
        <div className="text-center mb-2 ">
          <button
            className="inline-block px-4 text-sm font-semibold border py-2 bg-green-500 hover:bg-green-600 text-white rounded-md mr-2 sm:mr-4"
            onClick={handleDepositosClick}
          >
            Depósitos
          </button>
          <button
            className="inline-block px-5 text-sm font-semibold border py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            onClick={handleRetirosClick}
          >
            Retiros
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 p-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
          {showDepositos
            ? imagesDepositos.map((image, index) => (
                <img
                  key={index}
                  src={image.img}
                  alt={`Imagen ${index + 1}`}
                  className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
                  onClick={() => handleImageClick(image)}
                />
              ))
            : imagesRetiros.map((image, index) => (
                <img
                  key={index}
                  src={image.img}
                  alt={`Imagen ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
        </div>
        {selectedImage && (
          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="justify-center">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="flex justify-center font-bold text-base text-gray-900">
                        {selectedImage.title}
                      </h3>
                      <hr></hr>
                      <p className=" mt-4 mb-4 text-sm text-justify w-full">
                        <p>{selectedImage.descriptionTitle}</p>
                        <br></br>
                        {selectedImage.description}
                      </p>
                      <div>
                        <hr></hr>
                        <div class="grid grid-cols-3 mt-2 mb-2 text-center justify-center gap-2">
                          <p class="w-full whitespace-nowrap">
                            <strong>Mínimo:</strong>
                          </p>
                          <p class="w-full whitespace-nowrap">
                            <strong>Máximo:</strong>
                          </p>
                          <p class="w-full whitespace-nowrap">
                            <strong>Tiempo:</strong>
                          </p>
                        </div>

                        <div class="grid grid-cols-3 mb-2 text-center justify-center gap-2">
                          <p>{selectedImage.min}</p>
                          <p>{selectedImage.max}</p>
                          <p>{selectedImage.time}</p>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                </div>
                <footer className="text-center text-gray-500 text-sm">
                  <a
                    href={selectedImage.url}
                    target="_blank"
                    className="underline hover:text-gray-700"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </footer>

                <div class="flex justify-center items-center px-4 py-3">
                  <button
                    type="button"
                    class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EC;

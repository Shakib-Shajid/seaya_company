"use client"
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-none w-full mx-auto'>
            <div
                className="hero min-h-screen lg:w-1/2 bg-[#191970]"
            >
                <div className="hero-content text-neutral-content text-center w-full">
                    <div className="w-full">
                        <Image src="/main_logo.png" width="200" height="200" alt="" className='bg-white mx-auto mt-20 mb-20' />
                        <p className='text-2xl font-bold uppercase my-10 hidden'>seaya capital gestion sgeic, s.a.</p>

                        <div className="join join-vertical lg:w-3/4 mx-auto text-white">
                            <div className="collapse collapse-arrow border-base-300 border mb-2 rounded-xl text-start hover:bg-white hover:text-black">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-sm font-bold">Introducción al canal</div>
                                <div className="collapse-content bg-white text-black">
                                    <p>
                                        Bienvenido al Canal del informante de SEAYA CAPITAL GESTION SGEIC, S.A.. Desde esta plataforma podrás exponer tu comunicado de manera confidencial, para después proceder a la investigación oportuna.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border-base-300 border mb-2 rounded-xl text-start hover:bg-white hover:text-black">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-sm font-bold">¿Quién puede utilizar este canal?</div>
                                <div className="collapse-content bg-white text-black">
                                    <p>El canal del informante SOLO podrá ser utilizado por personas que tengan la condición de: </p> <br />
                                    <ul className='list-disc ml-5'>
                                        <li>Empleados/as</li>
                                        <li>Personal interno, personal autónomo </li>
                                        <li>Accionistas, partícipes y personas pertenecientes al órgano de administración, dirección o supervisión de una empresa, incluidos/as los miembros no ejecutivos/as.</li>
                                        <li>Cualquier persona que trabaje para o bajo la supervisión y la dirección de contratistas, subcontratistas y proveedores </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border-base-300 border mb-2 rounded-xl text-start hover:bg-white hover:text-black">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-sm font-bold">¿Qué se puede informar?</div>
                                <div className="collapse-content bg-white text-black">
                                    <p>El canal del informante solo será usado para la comunicación de posibles delitos y/o incumplimientos referidos a:</p> <br />
                                    <ul>
                                        <li className='font-bold'>A. Cualesquiera acciones u omisiones que puedan constituir infracciones del  Derecho de la Unión Europea</li> <br />
                                        <li className='font-bold'>B. Acciones u omisiones que puedan ser constitutivas de infracción penal o administrativa grave o muy grave.</li> <br />
                                        <li className='font-bold'>C. Incumplimientos de: </li>
                                        <ul className='list-disc ml-5'>
                                            <li>Políticas y Procedimientos establecidos en el Plan de Prevención de Riesgos Laborales y la Planificación de la Actividad Preventiva.</li>
                                            <li>Políticas de Protección de Datos. </li>
                                            <li> Otras Políticas y Procedimientos internos.</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow border-base-300 border mb-2 rounded-xl text-start hover:bg-white hover:text-black">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-sm font-bold">¿Cómo informar?</div>
                                <div className="collapse-content bg-white text-black">
                                    <p>Los comunicados se realizan a través del formulario disponible  en esta plataforma de la Entidad, accediendo a el desde el boton  <span className='font-bold'>Hacer comunicado</span></p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow border-base-300 border mb-2 rounded-xl text-start hover:bg-white hover:text-black">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-sm font-bold">Recomendaciones</div>
                                <div className="collapse-content bg-white text-black">
                                    <p><span className='font-bold'>¿Qué hechos quiere comunicar?</span> Describa los hechos de la forma más detallada, precisa y objetiva posible. Incluya todos los hechos que considere relevantes. No es necesario que realice una calificación jurídica de los mismos.</p> <br />

                                    <p><span className='font-bold'>¿Cuándo han ocurrido?</span>  Conocer el período temporal referido por los hechos y si los mismos se siguen produciendo en la actualidad, ayudará a llevar a cabo una investigación eficaz de los mismos.</p> <br />

                                    <p><span className='font-bold'>¿Dónde han ocurrido?</span> Conocer la ubicación corporativa, departamental o física de los hechos, puede ser un dato muy importante.</p> <br />

                                    <p><span className='font-bold'>¿Puede aportar alguna prueba?</span> Detalle, si lo conoce, qué personas están implicadas y qué personas podrían testificar sobre estos hechos. ¿Tiene documentos que ayuden a probar los hechos ? No es obligatorio, pero puede resultar clave para aplicar filtros de conflicto de interés, facilitar la investigación y dilucidar la veracidad de las afirmaciones contenidas.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow border-base-300 border mb-2 rounded-xl text-start hover:bg-white hover:text-black">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-sm font-bold">Confidencialidad y seguimiento</div>
                                <div className="collapse-content bg-white text-black">
                                    <p>Se garantiza la confidencialidad total y absoluta del/la informante, informado/a y de otras personas que pudieran estar relacionadas, así como del contenido del comunicado.</p> <br />
                                    <p>El canal del  informante de SEAYA CAPITAL GESTION SGEIC, S.A. permite el anonimato, por lo que serán aceptadas para su tramitación aquellos comunicados en las que no consten los datos de identificación del/la informante, investigándose las mismas con la mayor prudencia y proporcionalidad.</p> <br />
                                    <p><span className='font-bold uppercase'>importante:</span> El código asignado cuando se realiza una comunicacion es la única forma de acceso y es responsabilidad del/la informante conservarlo. Este canal garantiza la confidencialidad de las comunicaciones y ofrece la posibilidad de preservar el anonimato. Permite además mantener la colaboración con la Entidad en la comprobación de los hechos. Es importante que se mantenga el diálogo entre los/las informantes y la Entidad por medio de este canal para facilitar las tareas de investigación y comprobar los hechos. La falta de respuesta a los requerimientos de información formulados a través del Buzón de Comunicados podría suponer el archivo de las actuaciones.</p> <br />
                                    <p>El seguimiento y toda la comunicación se llevará a cabo exclusivamente dentro de la aplicación.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:items-center lg:justify-center w-[94%] mx-auto lg:w-1/2 my-20' >
                <div className='text-center'>
                    <h3 className='text-xl lg:text-2xl font-bold'>Canal de Denuncias</h3>
                    <p className='text-sm lg:text-base font-bold uppercase text-[#A1A5B7] mt-5 mb-10'>seaya capital gestion sgeic, s.a.</p>
                    <div className='flex flex-col md:flex-row gap-5 justify-center w-full'>
                        <button className="btn mx-auto md:mx-0 px-10 text-center bg-[#191970] text-white">Hacer comunicación</button>
                        <button className="btn mx-auto md:mx-0 px-20 text-center bg-[#F5F8FA] text-black">Consulta</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;


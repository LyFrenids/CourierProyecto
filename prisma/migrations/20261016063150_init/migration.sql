-- CreateTable
CREATE TABLE "cliente" (
    "idCliente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "estadoPaquete" (
    "idEstado" SERIAL NOT NULL,
    "nombreEstado" TEXT NOT NULL,
    "Descripcion" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "estadoPaquete_pkey" PRIMARY KEY ("idEstado")
);

-- CreateTable
CREATE TABLE "paquete" (
    "idPaquete" SERIAL NOT NULL,
    "Tracking" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "peso" DECIMAL(65,30) NOT NULL,
    "dimensiones" TEXT NOT NULL,
    "valorDeclarado" DECIMAL(65,30) NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "idEstado" INTEGER NOT NULL,
    "fechaRecepcion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paquete_pkey" PRIMARY KEY ("idPaquete")
);

-- CreateTable
CREATE TABLE "Envio" (
    "idEnvio" SERIAL NOT NULL,
    "idPaquete" INTEGER NOT NULL,
    "idDireccionDestino" INTEGER NOT NULL,
    "fechaEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaEntregaEstimada" TIMESTAMP(3) NOT NULL,
    "fechaEntregaReal" TIMESTAMP(3),
    "costoEnvio" DECIMAL(65,30) NOT NULL,
    "idRepartidor" INTEGER,

    CONSTRAINT "Envio_pkey" PRIMARY KEY ("idEnvio")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "idDireccion" SERIAL NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "calle" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "referencia" TEXT,
    "tipoDireccion" TEXT NOT NULL,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("idDireccion")
);

-- CreateTable
CREATE TABLE "pago" (
    "idPago" SERIAL NOT NULL,
    "idEnvio" INTEGER NOT NULL,
    "monto" DECIMAL(65,30) NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "fechaPago" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estadoPago" TEXT NOT NULL,
    "referencia" TEXT,

    CONSTRAINT "pago_pkey" PRIMARY KEY ("idPago")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "idEmpleado" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("idEmpleado")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cedula_key" ON "cliente"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_correo_key" ON "cliente"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "estadoPaquete_nombreEstado_key" ON "estadoPaquete"("nombreEstado");

-- CreateIndex
CREATE UNIQUE INDEX "paquete_Tracking_key" ON "paquete"("Tracking");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_correo_key" ON "Empleado"("correo");

-- AddForeignKey
ALTER TABLE "paquete" ADD CONSTRAINT "paquete_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "cliente"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paquete" ADD CONSTRAINT "paquete_idEstado_fkey" FOREIGN KEY ("idEstado") REFERENCES "estadoPaquete"("idEstado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_idPaquete_fkey" FOREIGN KEY ("idPaquete") REFERENCES "paquete"("idPaquete") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_idDireccionDestino_fkey" FOREIGN KEY ("idDireccionDestino") REFERENCES "Direccion"("idDireccion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_idRepartidor_fkey" FOREIGN KEY ("idRepartidor") REFERENCES "Empleado"("idEmpleado") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direccion" ADD CONSTRAINT "Direccion_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "cliente"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pago" ADD CONSTRAINT "pago_idEnvio_fkey" FOREIGN KEY ("idEnvio") REFERENCES "Envio"("idEnvio") ON DELETE RESTRICT ON UPDATE CASCADE;

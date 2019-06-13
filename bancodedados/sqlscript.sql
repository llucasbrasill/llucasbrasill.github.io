-- MySQL Script generated by MySQL Workbench
-- qua 12 jun 2019 23:51:01 -03
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`hotel` (
  `idhotel` INT NOT NULL,
  `nome_fantasia` VARCHAR(45) NULL,
  `cnpj` VARCHAR(45) NULL,
  `quantidade_de_quartos` VARCHAR(45) NULL,
  `formas_de_pagamentos_aceitas` VARCHAR(45) NULL,
  `vagas_estacionamento` VARCHAR(45) NULL,
  `avaliação` FLOAT NULL,
  PRIMARY KEY (`idhotel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cliente` (
  `idCli` INT NOT NULL,
  `Nome` VARCHAR(45) NULL,
  `Sexo` VARCHAR(45) NULL,
  `Endereço` VARCHAR(45) NULL,
  `forma_de_pagamento` VARCHAR(45) NULL,
  `data_da_reserva` VARCHAR(45) NULL,
  `data_entrada` VARCHAR(45) NULL,
  `data_saida` VARCHAR(45) NULL,
  PRIMARY KEY (`idCli`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`quartos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`quartos` (
  `idquartos` INT NOT NULL,
  `andar` VARCHAR(45) NULL,
  `numero_do_quarto` VARCHAR(45) NULL,
  `tipo_do_quarto` VARCHAR(45) NULL,
  `quantidade_de_hospedes` VARCHAR(45) NULL,
  `quantidade_banheiro` VARCHAR(45) NULL,
  `preço_diaria` VARCHAR(45) NULL,
  `Cliente_idCli` INT NOT NULL,
  PRIMARY KEY (`idquartos`),
  INDEX `fk_quartos_Cliente1_idx` (`Cliente_idCli` ASC),
  CONSTRAINT `fk_quartos_Cliente1`
    FOREIGN KEY (`Cliente_idCli`)
    REFERENCES `mydb`.`Cliente` (`idCli`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`quartos_has_hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`quartos_has_hotel` (
  `quartos_idquartos` INT NOT NULL,
  `hotel_idhotel` INT NOT NULL,
  PRIMARY KEY (`quartos_idquartos`, `hotel_idhotel`),
  INDEX `fk_quartos_has_hotel_hotel1_idx` (`hotel_idhotel` ASC),
  INDEX `fk_quartos_has_hotel_quartos_idx` (`quartos_idquartos` ASC),
  CONSTRAINT `fk_quartos_has_hotel_quartos`
    FOREIGN KEY (`quartos_idquartos`)
    REFERENCES `mydb`.`quartos` (`idquartos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_quartos_has_hotel_hotel1`
    FOREIGN KEY (`hotel_idhotel`)
    REFERENCES `mydb`.`hotel` (`idhotel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cliente_has_hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cliente_has_hotel` (
  `Cliente_idCli` INT NOT NULL,
  `hotel_idhotel` INT NOT NULL,
  PRIMARY KEY (`Cliente_idCli`, `hotel_idhotel`),
  INDEX `fk_Cliente_has_hotel_hotel1_idx` (`hotel_idhotel` ASC),
  INDEX `fk_Cliente_has_hotel_Cliente1_idx` (`Cliente_idCli` ASC),
  CONSTRAINT `fk_Cliente_has_hotel_Cliente1`
    FOREIGN KEY (`Cliente_idCli`)
    REFERENCES `mydb`.`Cliente` (`idCli`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cliente_has_hotel_hotel1`
    FOREIGN KEY (`hotel_idhotel`)
    REFERENCES `mydb`.`hotel` (`idhotel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
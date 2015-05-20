SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


-- -----------------------------------------------------
-- Table `stdexam`.`student`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`student` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`student` (
  `idstudent` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `mother_name` VARCHAR(45) NULL,
  `birth_date` DATE NOT NULL,
  `place_birth` VARCHAR(45) NULL,
  `fknationality` INT NOT NULL,
  `gender` VARCHAR(45) NULL,
  `no_paper_family` INT NULL,
  `no_under_family` INT NULL,
  `physical_address` VARCHAR(100) NULL,
  `civil_reg` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `place_work` VARCHAR(60) NULL,
  `last_certificate` VARCHAR(100) NULL,
  `customiz_last_certificate` VARCHAR(100) NULL,
  `date_certif` DATE NULL,
  `place_certif` VARCHAR(45) NULL,
  `setting_number` INT NULL,
  `student_rate` FLOAT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `status` INT NULL DEFAULT 1,
  PRIMARY KEY (`idstudent`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`nationality`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`nationality` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`nationality` (
  `idnationality` INT NOT NULL,
  `nationalitycol` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`idnationality`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`faculty_member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`faculty_member` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`faculty_member` (
  `idfaculty_member` INT NOT NULL AUTO_INCREMENT,
  `qualification` VARCHAR(45) NULL,
  `specialization` VARCHAR(45) NULL,
  `birth_date` DATE NULL,
  `gender` VARCHAR(45) NULL,
  `physical_address` VARCHAR(50) NULL,
  `phone` VARCHAR(50) NULL,
  `place_birth` VARCHAR(50) NULL,
  `nationality_idnationality` INT NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`idfaculty_member`),
  INDEX `fk_faculty_member_nationality1_idx` (`nationality_idnationality` ASC),
  CONSTRAINT `fk_faculty_member_nationality1`
    FOREIGN KEY (`nationality_idnationality`)
    REFERENCES `stdexam`.`nationality` (`idnationality`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`timestamps_1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`timestamps_1` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`timestamps_1` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `stdexam`.`course`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`course` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`course` (
  `idcourse` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `art_code` VARCHAR(45) NULL,
  `years_teaching` DATE NULL,
  `chapter_no` INT NULL,
  `status` INT NULL DEFAULT 1,
  `no_practical_unit` INT NULL,
  `theor_no_hour` INT NULL,
  `no_practical_hour` INT NULL,
  `chapter_degrees` FLOAT NULL,
  `final_theor` FLOAT NULL,
  `final_practical` FLOAT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`idcourse`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`division`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`division` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`division` (
  `iddivision` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `status` INT NULL DEFAULT 1,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`iddivision`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`department`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`department` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`department` (
  `iddepartment` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `status` INT NULL DEFAULT 1,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `division_iddivision` INT NOT NULL,
  PRIMARY KEY (`iddepartment`),
  INDEX `fk_department_division1_idx` (`division_iddivision` ASC),
  CONSTRAINT `fk_department_division1`
    FOREIGN KEY (`division_iddivision`)
    REFERENCES `stdexam`.`division` (`iddivision`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`academy_std_Pstage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`academy_std_Pstage` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`academy_std_Pstage` (
  `idacademy-std-pstage` INT NOT NULL,
  `No-group` VARCHAR(45) NOT NULL,
  `result_case` VARCHAR(45) NOT NULL,
  `chapter_degrees` FLOAT NULL,
  `final_exam` FLOAT NULL,
  `sum_dagrees` FLOAT NULL,
  `student-status` VARCHAR(45) NULL,
  `course_idcourse` INT NOT NULL,
  `student_idstudent` INT NOT NULL,
  `department_iddepartment` INT NOT NULL,
  `division_iddivision` INT NOT NULL,
  PRIMARY KEY (`idacademy-std-pstage`),
  UNIQUE INDEX `idacademy-std-Pstage_UNIQUE` (`idacademy-std-pstage` ASC),
  INDEX `fk_academy-std-Pstage_course1_idx` (`course_idcourse` ASC),
  INDEX `fk_academy-std-Pstage_student1_idx` (`student_idstudent` ASC),
  INDEX `fk_academy-std-Pstage_department1_idx` (`department_iddepartment` ASC),
  INDEX `fk_academy-std-Pstage_division1_idx` (`division_iddivision` ASC),
  CONSTRAINT `fk_academy-std-Pstage_course1`
    FOREIGN KEY (`course_idcourse`)
    REFERENCES `stdexam`.`course` (`idcourse`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_academy-std-Pstage_student1`
    FOREIGN KEY (`student_idstudent`)
    REFERENCES `stdexam`.`student` (`idstudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_academy-std-Pstage_department1`
    FOREIGN KEY (`department_iddepartment`)
    REFERENCES `stdexam`.`department` (`iddepartment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_academy-std-Pstage_division1`
    FOREIGN KEY (`division_iddivision`)
    REFERENCES `stdexam`.`division` (`iddivision`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`academy_std_dep`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`academy_std_dep` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`academy_std_dep` (
  `idacademy-std-dep` INT NOT NULL AUTO_INCREMENT,
  `No_corse` VARCHAR(45) NOT NULL,
  `result_case` VARCHAR(45) NULL,
  `sum-dagrees` FLOAT NULL,
  `final_exam` FLOAT NULL,
  `student-status` VARCHAR(45) NULL,
  `chapter_degrees` FLOAT NULL,
  `course_idcourse` INT NOT NULL,
  `student_idstudent` INT NOT NULL,
  `division_iddivision` INT NOT NULL,
  `department_iddepartment` INT NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `status` INT NULL DEFAULT '1',
  PRIMARY KEY (`idacademy-std-dep`),
  UNIQUE INDEX `idacademy-std-Pstage_UNIQUE` (`idacademy-std-dep` ASC),
  INDEX `fk_academy-std-Pstage_course1_idx` (`course_idcourse` ASC),
  INDEX `fk_academy-std-Pstage_student1_idx` (`student_idstudent` ASC),
  INDEX `fk_academy-std-Pstage_department1_idx` (`department_iddepartment` ASC),
  INDEX `fk_academy-std-Pstage_division1_idx` (`division_iddivision` ASC),
  CONSTRAINT `fk_academy-std-Pstage_course10`
    FOREIGN KEY (`course_idcourse`)
    REFERENCES `stdexam`.`course` (`idcourse`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_academy-std-Pstage_student10`
    FOREIGN KEY (`student_idstudent`)
    REFERENCES `stdexam`.`student` (`idstudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_academy-std-Pstage_department10`
    FOREIGN KEY (`department_iddepartment`)
    REFERENCES `stdexam`.`department` (`iddepartment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_academy-std-Pstage_division10`
    FOREIGN KEY (`division_iddivision`)
    REFERENCES `stdexam`.`division` (`iddivision`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stdexam`.`inffo_Institute`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stdexam`.`inffo_Institute` ;

CREATE TABLE IF NOT EXISTS `stdexam`.`inffo_Institute` (
  `idinffo_Institute` INT NOT NULL,
  `general_manager` VARCHAR(45) NOT NULL,
  `stdexam_manager` VARCHAR(45) NOT NULL,
  `result_first_floor` VARCHAR(45) NULL,
  `result_second_floor` VARCHAR(45) NULL,
  PRIMARY KEY (`idinffo_Institute`),
  UNIQUE INDEX `idinffo_Institute_UNIQUE` (`idinffo_Institute` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

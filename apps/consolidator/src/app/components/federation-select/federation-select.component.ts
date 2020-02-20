import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EntitiesService } from '../../services/entities.service';
import { Entity } from '../../models/Entity';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'perun-web-apps-federation-select',
  templateUrl: './federation-select.component.html',
  styleUrls: ['./federation-select.component.scss']
})
export class FederationSelectComponent implements OnInit {

  constructor(
    private entitiesService: EntitiesService
  ) { }

  entities: Entity[] = [
    {
      entityid: "https://idp.hostel.eduid.cz/idp/shibboleth",
      name: {
        en: "Hostel",
        cs: "Hostel"
      }
    },
    {
      entityid: "https://cas.cuni.cz/idp/shibboleth",
      name: {
        en: "Charles University",
        cs: "Univerzita Karlova"
      }
    },
    {
      entityid: "https://cbvk.cz/idp/shibboleth",
      name: {
        en: "The Research Library in Ceske Budejovice",
        cs: "Jihočeská vědecká knihovna v Českých Budějovicích"
      }
    },
    {
      entityid: "https://eduid.czu.cz/idp/shibboleth",
      name: {
        en: "Czech University of Life Sciences Prague",
        cs: "Česká zemědělská univerzita v Praze"
      }
    },
    {
      entityid: "https://eduid.vspj.cz/idp/shibboleth",
      name: {
        en: "College of Polytechnics Jihlava",
        cs: "Vysoká škola polytechnická Jihlava"
      }
    },
    {
      entityid: "https://eduid.vumop.cz/idp/shibboleth",
      name: {
        en: "VUMOP, v.v.i.",
        cs: "VUMOP, v.v.i."
      }
    },
    {
      entityid: "https://helium.jcu.cz/idp/shibboleth",
      name: {
        en: "University of South Bohemia in Ceske Budejovice",
        cs: "Jihočeská univerzita v Českých Budějovicích"
      }
    },
    {
      entityid: "https://idp.asu.cas.cz/idp/shibboleth",
      name: {
        en: "Astronomical Institute of the Czech Academy of Sciences",
        cs: "Astronomický ústav Akademie věd České Republiky"
      }
    },
    {
      entityid: "https://idp.bc.cas.cz/idp/shibboleth",
      name: {
        en: "Biology Centre AS CR",
        cs: "Biologické centrum AV ČR, AV ČR"
      }
    },
    {
      entityid: "https://idp.img.cas.cz/idp/shibboleth",
      name: {
        en: "Institute of Molecular Genetics of the ASCR",
        cs: "Ústav molekulární genetiky AV ČR"
      }
    },
    {
      entityid: "https://idp.ipp.cas.cz/idp/shibboleth",
      name: {
        en: "Institute of Plasma Physics AS CR",
        cs: "Ústav fyziky plazmatu AV ČR"
      }
    },
    {
      entityid: "https://idp.savs.cz/idp/shibboleth",
      name: {
        en: "ŠKODA AUTO University",
        cs: "ŠKODA AUTO Vysoká škola"
      }
    },
    {
      entityid: "https://idp.uapp.cz/idp/shibboleth",
      name: {
        en: "Institute of Archaeological Heritage Brno",
        cs: "Ústav archeologické památkové péče Brno"
      }
    },
    {
      entityid: "https://idp.vsb.cz/idp/shibboleth",
      name: {
        en: "VSB - TU Ostrava",
        cs: "VŠB - TU Ostrava"
      }
    },
    {
      entityid: "https://idp2.civ.cvut.cz/idp/shibboleth",
      name: {
        en: "Czech Technical University in Prague",
        cs: "České vysoké učení technické v Praze"
      }
    },
    {
      entityid: "https://idp2.ics.muni.cz/idp/shibboleth",
      name: {
        en: "Masaryk University",
        cs: "Masarykova univerzita"
      }
    },
    {
      entityid: "https://iir.cz/idp/shibboleth",
      name: {
        en: "Institute of International Relations",
        cs: "Ústav mezinárodních vztahů"
      }
    },
    {
      entityid: "https://kfbz.cz/idp/shibboleth",
      name: {
        en: "Regional Library Zlín",
        cs: "Krajská knihovna Františka Bartoše ve Zlíně"
      }
    },
    {
      entityid: "https://kjd.pb.cz/idp/shibboleth",
      name: {
        en: "Jan Drda´s Library",
        cs: "Knihovna Jana Drdy"
      }
    },
    {
      entityid: "https://kkdvyskov.cz/idp/shibboleth",
      name: {
        en: "Karel Dvoracek Library",
        cs: "Knihovna Karla Dvořáčka"
      }
    },
    {
      entityid: "https://kkvysociny.cz/idp/shibboleth",
      name: {
        en: "Regional Library Vysočina",
        cs: "Krajská knihovna Vysočiny"
      }
    },
    {
      entityid: "https://knih-ck.cz/idp/shibboleth",
      name: {
        en: "Municipal Library in Cesky Krumlov",
        cs: "Městská knihovna v Českém Krumlově"
      }
    },
    {
      entityid: "https://knih-pe.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Pelhrimov",
        cs: "Městská knihovna Pelhřimov"
      }
    },
    {
      entityid: "https://knih-pi.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Pisek",
        cs: "Městská knihovna Písek"
      }
    },
    {
      entityid: "https://knihmil.cz/idp/shibboleth",
      name: {
        en: "Municipal Library in Milevsko",
        cs: "Městská knihovna v Milevsku"
      }
    },
    {
      entityid: "https://knihovna-kh.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Kutná Hora",
        cs: "Městská knihovna Kutná Hora"
      }
    },
    {
      entityid: "https://knihovna.brandysnl.cz/idp/shibboleth",
      name: {
        en: "Eduard Petiska Library",
        cs: "Knihovna Eduarda Petišky"
      }
    },
    {
      entityid: "https://knihovna.ceska-trebova.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Česká Třebová",
        cs: "Městská knihovna Česká Třebová"
      }
    },
    {
      entityid: "https://knihovnabreclav.cz/idp/shibboleth",
      name: {
        en: "Municipal library in Breclav",
        cs: "Městská knihovna Břeclav"
      }
    },
    {
      entityid: "https://knihovnachodov.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Chodov",
        cs: "Městská knihovna Chodov"
      }
    },
    {
      entityid: "https://knihovnahk.cz/idp/shibboleth",
      name: {
        en: "Municipal Library of Hradec Kralove",
        cs: "Knihovna města Hradce Králové"
      }
    },
    {
      entityid: "https://knihovnahod.cz/idp/shibboleth",
      name: {
        en: "Municipal Library in Hodonin",
        cs: "Městská knihovna Hodonín"
      }
    },
    {
      entityid: "https://knihovnahradec.cz/idp/shibboleth",
      name: {
        en: "Municipal Library and Information centre of Hradec nad Moravicí",
        cs: "Městská knihovna a informační centrum Hradec nad Moravicí"
      }
    },
    {
      entityid: "https://knihovnaml.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Marianske Lazne",
        cs: "Městská knihovna Mariánské Lázně"
      }
    },
    {
      entityid: "https://knihovnaprerov.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Přerov",
        cs: "Městská knihovna v Přerově"
      }
    },
    {
      entityid: "https://knihovnatabor.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Tábor",
        cs: "Městská knihovna Tábor"
      }
    },
    {
      entityid: "https://knihovnatrinec.cz/idp/shibboleth",
      name: {
        en: "Library in Třinec",
        cs: "Knihovna Třinec"
      }
    },
    {
      entityid: "https://knihovnazn.cz/idp/shibboleth",
      name: {
        en: "Municipal library in Znojmo",
        cs: "Městská knihovna Znojmo"
      }
    },
    {
      entityid: "https://kpbo.cz/idp/shibboleth",
      name: {
        en: "District Library of Petr Bezruč in Opava",
        cs: "Knihovna Petra Bezruče v Opavě"
      }
    },
    {
      entityid: "https://kvkli.cz/idp/shibboleth",
      name: {
        en: "Regional Research Library Liberec",
        cs: "Krajská vědecká knihovna Liberec"
      }
    },
    {
      entityid: "https://marisa.uochb.cas.cz/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Institute of Organic Chemistry and Biochemistry AS CR",
        cs: "Ústav organické chemie a biochemie AV ČR"
      }
    },
    {
      entityid: "https://mkkl.cz/idp/shibboleth",
      name: {
        en: "Municipal Library in Kladno",
        cs: "Městská knihovna Kladno"
      }
    },
    {
      entityid: "https://mkostrov.cz/idp/shibboleth",
      name: {
        en: "Municipal Library Ostrov",
        cs: "Městská knihovna Ostrov"
      }
    },
    {
      entityid: "https://npmk.cz/idp/shibboleth",
      name: {
        en: "Comenius Library of Education",
        cs: "Pedagogická knihovna J. A. Komenského"
      }
    },
    {
      entityid: "https://shib.zcu.cz/idp/shibboleth",
      name: {
        en: "University of West Bohemia",
        cs: "Západočeská univerzita v Plzni"
      }
    },
    {
      entityid: "https://shibbo.tul.cz/idp/shibboleth",
      name: {
        en: "Technical University of Liberec",
        cs: "Technická univerzita v Liberci"
      }
    },
    {
      entityid: "https://shibboleth.mzk.cz/simplesaml/metadata.xml",
      name: {
        en: "Moravian Library",
        cs: "Moravská zemská knihovna"
      }
    },
    {
      entityid: "https://svkkl.cz/idp/shibboleth",
      name: {
        en: "Central Bohemian Research Library",
        cs: "Středočeská vědecká knihovna v Kladně"
      }
    },
    {
      entityid: "https://svkul.cz/idp/shibboleth",
      name: {
        en: "The North Bohemian Research Library",
        cs: "Severočeská vědecká knihovna v Ústí nad Labem"
      }
    },
    {
      entityid: "https://whoami.cesnet.cz/idp/shibboleth",
      name: {
        en: "CESNET",
        cs: "CESNET"
      }
    },
    {
      entityid: "https://wsso.vscht.cz/idp/shibboleth",
      name: {
        en: "University of Chemistry and Technology, Prague",
        cs: "Vysoká škola chemicko-technologická Praze"
      }
    },
    {
      entityid: "https://sso.egi.eu/edugainidp/shibboleth",
      name: {
        nl: "EGI Foundation",
        en: "EGI Foundation"
      }
    },
    {
      entityid: "https://idp.surfnet.nl",
      name: {
        nl: "SURFnet bv",
        en: "SURFnet bv"
      }
    },
    {
      entityid: "https://sso.nikhef.nl/sso/saml2/idp/metadata.php",
      name: {
        nl: "Nikhef",
        en: "Nikhef"
      }
    },
    {
      entityid: "http://fs.nioz.nl/adfs/services/trust",
      name: {
        nl: "Koninklijk Nederlands Instituut voor Onderzoek der Zee (NIOZ)",
        en: "Koninklijk Nederlands Instituut voor Onderzoek der Zee (NIOZ)"
      }
    },
    {
      entityid: "https://sso.surfsara.nl/saml/saml2/idp/metadata.php",
      name: {
        nl: "SURFsara",
        en: "SURFsara"
      }
    },
    {
      entityid: "https://idp.geant.org",
      name: {
        nl: "GÉANT Staff Identity Provider",
        en: "GÉANT Staff Identity Provider"
      }
    },
    {
      entityid: "https://idp.feide.no",
      name: {
        en: "Feide",
        no: "Feide",
        nn: "Feide"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/cemfiidp",
      name: {
        en: "Centro de Estudios Monetarios y Financieros",
        es: "Centro de Estudios Monetarios y Financieros"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/itacylidp",
      name: {
        en: "Instituto Tecnológico Agrario de Castilla y León",
        es: "Instituto Tecnológico Agrario de Castilla y León"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/isciiiidp",
      name: {
        en: "Instituto de Salud Carlos III",
        es: "Instituto de Salud Carlos III"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ulpgcidp",
      name: {
        en: "Universidad de Las Palmas de Gran Canaria",
        es: "Universidad de Las Palmas de Gran Canaria"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ullidp",
      name: {
        en: "Universidad de la Laguna",
        es: "Universidad de la Laguna"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/uvicidp",
      name: {
        en: "Universitat de Vic - Universitat Central de Catalunya",
        es: "Universitat de Vic - Universitat Central de Catalunya",
        ca: "Universitat de Vic - Universitat Central de Catalunya"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/usalidp",
      name: {
        en: "Universidad de Salamanca",
        es: "Universidad de Salamanca"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/urjcidp",
      name: {
        en: "Universidad Rey Juan Carlos",
        es: "Universidad Rey Juan Carlos"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/upnaidp",
      name: {
        en: "Public University of Navarra",
        es: "Universidad Pública de Navarra",
        eu: "Nafarroako Unibertsitate Publikoaren"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/unioviidp",
      name: {
        en: "University of Oviedo",
        es: "Universidad de Oviedo"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ubuidp",
      name: {
        en: "University of Burgos",
        es: "Universidad de Burgos"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/uabidp",
      name: {
        en: "Universitat Autónoma de Barcelona",
        es: "Universitat Autónoma de Barcelona",
        ca: "Universitat Autónoma de Barcelona"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ceniehidp",
      name: {
        en: "CENIEH Research Centre",
        es: "Centro Nacional de Investigación sobre la Evolución Humana"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/upvidp",
      name: {
        en: "UPV - Universitat Politècnica de València",
        es: "UPV - Universitat Politècnica de València"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ehuidp",
      name: {
        en: "University of the Basque Country",
        es: "Universidad del País Vasco",
        eu: "Euskal Herriko Unibertsitatea"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/uocidp",
      name: {
        en: "Universitat Oberta de Catalunya",
        es: "Universitat Oberta de Catalunya",
        ca: "Universitat Oberta de Catalunya"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/upoidp",
      name: {
        en: "Universidad Pablo de Olavide",
        es: "Universidad Pablo de Olavide"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/uvigoidp",
      name: {
        en: "Universidade de Vigo",
        es: "Universidade de Vigo",
        gl: "Universidade de Vigo"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ucoidp",
      name: {
        en: "UCO - Universidad de Córdoba",
        es: "UCO - Universidad de Córdoba"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/upcidp",
      name: {
        en: "Universitat Politecnica de Catalunya",
        es: "Universitat Politecnica de Catalunya",
        ca: "Universitat Politecnica de Catalunya"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/uvidp",
      name: {
        en: "Universitat de Valencia",
        es: "Universitat de Valencia",
        ca: "Universitat de Valencia"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/unedidp",
      name: {
        en: "National Distance Education University",
        es: "Universidad Nacional de Educación a Distancia"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/csicidp",
      name: {
        en: "CSIC - Consejo Superior de Investigaciones Cientificas",
        es: "CSIC - Consejo Superior de Investigaciones Cientificas"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/unizaridp",
      name: {
        en: "University of Zaragoza",
        es: "Universidad de Zaragoza"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/upmidp",
      name: {
        en: "Universidad Politécnica de Madrid",
        es: "Universidad Politécnica de Madrid"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/umaidp",
      name: {
        en: "University of Malaga",
        es: "Universidad de Málaga"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ubidp",
      name: {
        en: "Universitat de Barcelona",
        es: "Universitat de Barcelona",
        ca: "Universitat de Barcelona"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ifaeidp",
      name: {
        en: "IFAE - Institute for High Energy Physics",
        es: "IFAE - Instituto de Fisica de Altas Energias"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/crgidp",
      name: {
        en: "CRG - Centre for Genomic Regulation",
        es: "CRG - Centre for Genomic Regulation"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/bscidp",
      name: {
        en: "BSC - Barcelona Supercomputing Center"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/redirisidp",
      name: {
        en: "RedIRIS - Spanish Research and Academic Network",
        es: "RedIRIS - Red académica y de investigación española"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/fcsclidp",
      name: {
        en: "SCAYLE: Supercomputación Castilla y León",
        es: "SCAYLE: Supercomputación Castilla y León"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/ualidp",
      name: {
        en: "University of Almeria",
        es: "Universidad de Almería"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/udgidp",
      name: {
        en: "Universitat de Girona",
        ca: "Universitat de Girona",
        es: "Universitat de Girona"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/bcblidp",
      name: {
        en: "Basque Center on Cognition, Brain and Language",
        es: "Basque Center on Cognition, Brain and Language"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/plocanidp",
      name: {
        en: "Plataforma Oceánica de Canarias",
        es: "Plataforma Oceánica de Canarias"
      }
    },
    {
      entityid: "https://www.rediris.es/sir/cnicidp",
      name: {
        en: "Centro Nacional de Investigaciones Cardiovasculares",
        es: "Centro Nacional de Investigaciones Cardiovasculares"
      }
    },
    {
      entityid: "https://aai.certh.gr/idp/shibboleth",
      name: {
        el: "Εθνικό Κέντρο Έρευνας και Τεχνολογικής Ανάπτυξης.",
        en: "Centre for Research and Technology Hellas."
      }
    },
    {
      entityid: "https://edugain-proxy.igtf.net/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "IGTF Certificate Proxy"
      }
    },
    {
      entityid: "https://grnetbox.duth.gr/idp/shibboleth",
      name: {
        en: "Democritus University of Thrace",
        el: "Δημοκρίτειο Πανεπιστήμιο Θράκης"
      }
    },
    {
      entityid: "https://idp.admin.grnet.gr/idp/shibboleth",
      name: {
        en: "Greek Research and Technology Network - GRNET",
        el: "Εθνικό Δίκτυο Έρευνας και Τεχνολογίας - ΕΔΕΤ"
      }
    },
    {
      entityid: "https://idp.bioacademy.gr/idp/shibboleth",
      name: {
        en: "Biomedical Research Foundation - Academy of Athens",
        el: "Ίδρυμα Ιατροβιολογικών Ερευνών Ακαδημίας Αθηνών"
      }
    },
    {
      entityid: "https://idpro.fleming.gr/idp/shibboleth",
      name: {
        en: "Alexander Fleming Biomedical Sciences Research Center",
        el: "Ε.ΚΕ.Β.Ε. Αλέξανδρος Φλέμινγκ"
      }
    },
    {
      entityid: "https://login.athena-innovation.gr/idp/shibboleth",
      name: {
        en: "Athena - Research and Innovation Center",
        el: "Αθηνά - Ερευνητικό Κέντρο Καινοτομίας"
      }
    },
    {
      entityid: "https://login.iasa.gr/auth/saml2/idp/metadata.php",
      name: {
        en: "Institute of Accelerating Systems and Applications - IASA",
        el: "Ινστιτούτο Επιταχυντικών Συστημάτων και Εφαρμογών - ΙΕΣΕ"
      }
    },
    {
      entityid: "https://login.auth.gr/saml2/idp/metadata.php",
      name: {
        en: "Aristotle University of Thessaloniki",
        el: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης"
      }
    },
    {
      entityid: "https://aai.unifr.ch/idp/shibboleth",
      name: {
        de: "Universität Freiburg",
        en: "University of Fribourg",
        fr: "Université de Fribourg"
      }
    },
    {
      entityid: "https://aai-login.fh-htwchur.ch/idp/shibboleth",
      name: {
        de: "FHGR - Fachhochschule Graubünden",
        en: "FHGR - University of Applied Sciences of the Grisons"
      }
    },
    {
      entityid: "https://aai.unil.ch/idp/shibboleth",
      name: {
        en: "Université de Lausanne",
        fr: "Université de Lausanne"
      }
    },
    {
      entityid: "https://idp.epfl.ch/idp/shibboleth",
      name: {
        de: "EPFL - EPF Lausanne",
        en: "EPFL - EPF Lausanne",
        fr: "EPFL - EPF Lausanne"
      }
    },
    {
      entityid: "https://aai-login.unine.ch/idp/shibboleth",
      name: {
        en: "Université de Neuchâtel",
        fr: "Université de Neuchâtel"
      }
    },
    {
      entityid: "https://aai-logon.phtg.ch/idp/shibboleth",
      name: {
        de: "PHTG - Pädagogische Hochschule Thurgau",
        en: "PHTG - Pädagogische Hochschule Thurgau"
      }
    },
    {
      entityid: "https://login2.usi.ch/idp/shibboleth",
      name: {
        en: "Università della Svizzera italiana",
        it: "Università della Svizzera italiana"
      }
    },
    {
      entityid: "https://aai-login.hsr.ch/idp/shibboleth",
      name: {
        de: "HSR - Hochschule für Technik Rapperswil",
        en: "HSR - Hochschule für Technik Rapperswil"
      }
    },
    {
      entityid: "https://login2.supsi.ch/idp/shibboleth",
      name: {
        en: "SUPSI - Scuola Universitaria Professionale della Svizzera Italiana",
        it: "SUPSI - Scuola Universitaria Professionale della Svizzera Italiana"
      }
    },
    {
      entityid: "https://aai.ntb.ch/idp/shibboleth",
      name: {
        de: "NTB - Hochschule für Technik Buchs",
        en: "NTB - Hochschule für Technik Buchs"
      }
    },
    {
      entityid: "https://aai-logon.ethz.ch/idp/shibboleth",
      name: {
        de: "ETH Zürich",
        en: "ETH Zurich",
        fr: "ETH Zurich",
        it: "ETH Zurich"
      }
    },
    {
      entityid: "https://aai-logon.fhnw.ch/idp/shibboleth",
      name: {
        de: "FHNW - Fachhochschule Nordwestschweiz",
        en: "FHNW - Fachhochschule Nordwestschweiz"
      }
    },
    {
      entityid: "https://aai-login.hfh.ch/idp/shibboleth",
      name: {
        de: "HfH - Interkantonale Hochschule für Heilpädagogik",
        en: "HfH - Interkantonale Hochschule für Heilpädagogik"
      }
    },
    {
      entityid: "https://aai-login.phsg.ch/idp/shibboleth",
      name: {
        de: "PHSG - Pädagogische Hochschule St.Gallen",
        en: "PHSG - Pädagogische Hochschule St.Gallen"
      }
    },
    {
      entityid: "https://aai-logon.hes-so.ch/idp/shibboleth",
      name: {
        en: "HES-SO - Haute École Spécialisée de Suisse occidentale",
        fr: "HES-SO - Haute École Spécialisée de Suisse occidentale"
      }
    },
    {
      entityid: "https://aai.empa.ch/idp/shibboleth",
      name: {
        de: "Empa",
        en: "Empa"
      }
    },
    {
      entityid: "https://aai.unisg.ch/idp/shibboleth",
      name: {
        de: "Universität St. Gallen",
        en: "Universität St. Gallen"
      }
    },
    {
      entityid: "https://aai-logon.wsl.ch/idp/shibboleth",
      name: {
        de: "WSL - Eidg. Forschungsanstalt für Wald, Schnee und Landschaft",
        en: "WSL - Swiss Federal Institute for Forest, Snow and Landscape Research"
      }
    },
    {
      entityid: "https://aai-logon.switch.ch/idp/shibboleth",
      name: {
        de: "SWITCH Mitarbeitende",
        en: "SWITCH Staff",
        fr: "SWITCH Personnel",
        it: "SWITCH Collaboratori"
      }
    },
    {
      entityid: "https://aai-idp.uzh.ch/idp/shibboleth",
      name: {
        de: "Universität Zürich",
        en: "Universität Zürich"
      }
    },
    {
      entityid: "https://aai-idp.unibe.ch/idp/shibboleth",
      name: {
        de: "Universität Bern",
        en: "Universität Bern"
      }
    },
    {
      entityid: "https://aai-logon.hepvs.ch/idp/shibboleth",
      name: {
        de: "PHVS - Pädagogische Hochschule Wallis",
        en: "HEPVS - Haute école pédagogique du Valais",
        fr: "HEPVS - Haute école pédagogique du Valais"
      }
    },
    {
      entityid: "https://aai.idiap.ch/idp/shibboleth",
      name: {
        en: "Idiap Research Institute"
      }
    },
    {
      entityid: "https://aai-logon.bfh.ch/idp/shibboleth",
      name: {
        de: "BFH - Berner Fachhochschule",
        en: "BFH - Bern University of Applied Sciences",
        fr: "BFH - Haute école spécialisée bernoise"
      }
    },
    {
      entityid: "https://idp.hslu.ch/idp/shibboleth",
      name: {
        de: "HSLU - Hochschule Luzern",
        en: "HSLU - Lucerne University of Applied Sciences and Arts"
      }
    },
    {
      entityid: "https://aai-logon.unilu.ch/idp/shibboleth",
      name: {
        de: "Universität Luzern",
        en: "Universität Luzern"
      }
    },
    {
      entityid: "https://aai.insel.ch/idp/shibboleth",
      name: {
        de: "Insel Gruppe",
        en: "Insel Gruppe"
      }
    },
    {
      entityid: "https://aai-login.ph-gr.ch/idp/shibboleth",
      name: {
        de: "PHGR - Pädagogische Hochschule Graubünden",
        en: "PHGR - University of Teacher Education Graubünden",
        it: "PHGR - Alta Scuola Pedagogica dei Grigioni"
      }
    },
    {
      entityid: "https://idp.unige.ch/idp/shibboleth",
      name: {
        de: "Universität Genf",
        en: "Université de Genève",
        fr: "Université de Genève",
        it: "Università di Ginevra"
      }
    },
    {
      entityid: "https://aai-logon.unibas.ch/idp/shibboleth",
      name: {
        de: "Universität Basel",
        en: "Universität Basel",
        fr: "Université de Bâle"
      }
    },
    {
      entityid: "https://aai-login.phbern.ch/idp/shibboleth",
      name: {
        de: "PHBern - Pädagogische Hochschule Bern",
        en: "PHBern - Pädagogische Hochschule Bern"
      }
    },
    {
      entityid: "https://aai-login.snf.ch/idp/shibboleth",
      name: {
        de: "SNF - Schweizerischer Nationalfonds",
        en: "SNSF - Swiss National Science Foundation",
        fr: "FNS - Fonds national suisse",
        it: "FNS - Fondo Nazionale Svizzero"
      }
    },
    {
      entityid: "https://aai-logon.uni.li/idp/shibboleth",
      name: {
        de: "Universität Liechtenstein",
        en: "Universität Liechtenstein"
      }
    },
    {
      entityid: "https://aai-logon.psi.ch/idp/shibboleth",
      name: {
        de: "PSI - Paul Scherrer Institut",
        en: "PSI - Paul Scherrer Institut"
      }
    },
    {
      entityid: "https://aai.zhaw.ch/idp/shibboleth",
      name: {
        de: "ZHAW - Zürcher Hochschule für Angewandte Wissenschaften",
        en: "ZHAW - Zürcher Hochschule für Angewandte Wissenschaften"
      }
    },
    {
      entityid: "https://aai-logon.fhsg.ch/idp/shibboleth",
      name: {
        de: "FHS St. Gallen",
        en: "FHS St.Gallen"
      }
    },
    {
      entityid: "https://aai-logon.zhbluzern.ch/idp/shibboleth",
      name: {
        de: "Zentral- und Hochschulbibliothek Luzern",
        en: "Zentral- und Hochschulbibliothek Luzern"
      }
    },
    {
      entityid: "https://idp.fernuni.ch/idp/shibboleth",
      name: {
        de: "FernUni Schweiz",
        en: "DistanceUniversity",
        fr: "UniDistance"
      }
    },
    {
      entityid: "https://aai.phzg.ch/idp/shibboleth",
      name: {
        de: "PH Zug - Pädagogische Hochschule Zug",
        en: "PH Zug - Pädagogische Hochschule Zug"
      }
    },
    {
      entityid: "https://idp.phsz.ch/idp/shibboleth",
      name: {
        de: "PHSZ - Pädagogische Hochschule Schwyz",
        en: "PHSZ - Pädagogische Hochschule Schwyz"
      }
    },
    {
      entityid: "https://idp.phlu.ch/idp/shibboleth",
      name: {
        de: "PHLU - Pädagogische Hochschule Luzern",
        en: "PHLU - University of Teacher Education Lucerne"
      }
    },
    {
      entityid: "https://aai01.phzh.ch/idp/shibboleth",
      name: {
        de: "PH Zürich - Pädagogische Hochschule Zürich",
        en: "PH Zürich - Pädagogische Hochschule Zürich"
      }
    },
    {
      entityid: "https://aai-login.ehb-schweiz.ch/idp/shibboleth",
      name: {
        de: "EHB / IFFP / IUFFP - Das eidgenössische Hochschulinstitut für Berufsbildung",
        en: "SFIVET - Swiss Federal Institute for Vocational Education and Training",
        fr: "EHB / IFFP / IUFFP - Institut fédéral des hautes études en formation professionnelle",
        it: "EHB / IFFP / IUFFP - Istituto Universitario Federale per la Formazione Professionale"
      }
    },
    {
      entityid: "https://login.teologialugano.ch/idp/shibboleth",
      name: {
        en: "FTL - Facoltà di Teologia di Lugano",
        it: "FTL - Facoltà di Teologia di Lugano"
      }
    },
    {
      entityid: "https://aai-login.careum.ch/idp/shibboleth",
      name: {
        de: "Careum",
        en: "Careum"
      }
    },
    {
      entityid: "https://aai-login.pmodwrc.ch/idp/shibboleth",
      name: {
        de: "PMOD/WRC - Observatorium Davos",
        en: "PMOD/WRC - Observatory Davos"
      }
    },
    {
      entityid: "https://aai-loginhep.edufr.ch/idp/shibboleth",
      name: {
        de: "HEP-PH FR - Pädagogische Hochschule Freiburg",
        en: "HEP-PH FR - University of Teacher Education Fribourg",
        fr: "HEP-PH FR - Haute Ecole pédagogique Fribourg"
      }
    },
    {
      entityid: "https://login-idp.libraries.ch/idp/shibboleth",
      name: {
        de: "libraries.ch",
        en: "libraries.ch",
        fr: "libraries.ch",
        it: "libraries.ch"
      }
    },
    {
      entityid: "https://aai-login.hep-bejune.ch/idp/shibboleth",
      name: {
        de: "HEP-BEJUNE – Pädagogische Hochschule - BEJUNE",
        en: "HEP-BEJUNE - Haute Ecole Pédagogique BEJUNE",
        fr: "HEP-BEJUNE - Haute Ecole Pédagogique BEJUNE",
        it: "HEP-BEJUNE – Alta Scuola Pedagogica - BEJUNE"
      }
    },
    {
      entityid: "https://aai-login.euresearch.ch/idp/shibboleth",
      name: {
        en: "Euresearch Head Office"
      }
    },
    {
      entityid: "https://aai-login.swissuniversities.ch/idp/shibboleth",
      name: {
        en: "swissuniversities"
      }
    },
    {
      entityid: "https://aai-login.hepl.ch/idp/shibboleth",
      name: {
        en: "HEP Vaud - Haute école pédagogique du canton de Vaud",
        fr: "HEP Vaud - Haute école pédagogique du canton de Vaud"
      }
    },
    {
      entityid: "https://aai-login.balgrist.ch/idp/shibboleth",
      name: {
        de: "Universitätsklinik Balgrist",
        en: "Universitätsklinik Balgrist"
      }
    },
    {
      entityid: "https://cern.ch/login",
      name: {
        en: "CERN"
      }
    },
    {
      entityid: "https://aai-integration.dfn.de/idp/shibboleth",
      name: {
        de: "DFN AAI Integration + Test IdP",
        en: "DFN AAI Integration + Test IdP"
      }
    },
    {
      entityid: "https://aai.ipk-gatersleben.de/idp/shibboleth",
      name: {
        de: "IPK Gatersleben",
        en: "IPK Gatersleben"
      }
    },
    {
      entityid: "https://aai.ruhr-uni-bochum.de/idp/shibboleth",
      name: {
        de: "Ruhr-Universität Bochum",
        en: "Ruhr-Universität Bochum"
      }
    },
    {
      entityid: "https://aai.rz.uni-leipzig.de/idp/shibboleth",
      name: {
        de: "Universität Leipzig",
        en: "University of Leipzig"
      }
    },
    {
      entityid: "https://account.fh-potsdam.de/idp/shibboleth",
      name: {
        de: "Fachhochschule Potsdam",
        en: "Fachhochschule Potsdam, University of Applied Scienes"
      }
    },
    {
      entityid: "https://checkin.thga.de/idp/shibboleth",
      name: {
        de: "THGA Bochum",
        en: "THGA Bochum"
      }
    },
    {
      entityid: "https://dfnaai.charite.de/idp/shibboleth",
      name: {
        de: "Charité - Universitätsmedizin Berlin",
        en: "Charité - Universitätsmedizin Berlin"
      }
    },
    {
      entityid: "https://dkfzshib.inet.dkfz-heidelberg.de/idp/shibboleth",
      name: {
        de: "Deutsches Krebsforschungszentrum (DKFZ)",
        en: "Deutsches Krebsforschungszentrum (DKFZ)"
      }
    },
    {
      entityid: "https://ephraim.tu-berlin.de/shibboleth",
      name: {
        de: "Technische Universität Berlin",
        en: "Technische Universität Berlin"
      }
    },
    {
      entityid: "https://idp.biochem.mpg.de/idp/shibboleth",
      name: {
        de: "MPI fuer Biochemie",
        en: "MPI of Biochemistry"
      }
    },
    {
      entityid: "https://idp.de.dariah.eu/idp/shibboleth",
      name: {
        de: "DARIAH",
        en: "DARIAH"
      }
    },
    {
      entityid: "https://idp.desy.de/idp/shibboleth",
      name: {
        de: "Deutsches Elektronen-Synchrotron DESY",
        en: "Deutsches Elektronen-Synchrotron DESY"
      }
    },
    {
      entityid: "https://idp.dfn.de/idp/shibboleth",
      name: {
        de: "DFN-Verein Geschäftsstelle",
        en: "DFN Office"
      }
    },
    {
      entityid: "https://idp.dsm.museum/idp/shibboleth",
      name: {
        de: "Deutsches Schifffahrtsmuseum",
        en: "Deutsches Schifffahrtsmuseum"
      }
    },
    {
      entityid: "https://idp.eso.org/idp/shibboleth",
      name: {
        de: "ESO - European Southern Observatory",
        en: "ESO - European Southern Observatory"
      }
    },
    {
      entityid: "https://idp.evhn.de/idp/shibboleth",
      name: {
        de: "Evangelische Hochschule Nürnberg",
        en: "Evangelische Hochschule Nuernberg"
      }
    },
    {
      entityid: "https://idp.fraunhofer.de/idp/shibboleth",
      name: {
        de: "Fraunhofer-Gesellschaft",
        en: "Fraunhofer-Gesellschaft"
      }
    },
    {
      entityid: "https://idp.geomar.de/idp/shibboleth",
      name: {
        de: "GEOMAR Helmholtz-Zentrum für Ozeanforschung Kiel",
        en: "GEOMAR Helmholtz Centre for Ocean Research Kiel"
      }
    },
    {
      entityid: "https://idp.hs-bremen.de/idp/shibboleth",
      name: {
        de: "Hochschule Bremen",
        en: "City University of applied sciences Bremen"
      }
    },
    {
      entityid: "https://idp.hs-karlsruhe.de/idp/shibboleth",
      name: {
        de: "Hochschule Karlsruhe - Technik und Wirtschaft",
        en: "University of Applied Sciences Karlsruhe"
      }
    },
    {
      entityid: "https://idp.hs-wismar.de/idp/shibboleth",
      name: {
        de: "Hochschule Wismar",
        en: "Hochschule Wismar"
      }
    },
    {
      entityid: "https://idp.ipb-halle.de/idp/shibboleth",
      name: {
        de: "IPB Halle",
        en: "IPB Halle"
      }
    },
    {
      entityid: "https://idp.lrz.de/idp/shibboleth",
      name: {
        de: "Leibniz-Rechenzentrum (LRZ)",
        en: "Leibniz Supercomputing Centre (LRZ)"
      }
    },
    {
      entityid: "https://idp.mpi-inf.mpg.de/mpii-idp/shibboleth",
      name: {
        de: "Max-Planck-Institut für Informatik",
        en: "Max Planck Institute for Informatics"
      }
    },
    {
      entityid: "https://idp.rrz.uni-koeln.de/idp/shibboleth",
      name: {
        de: "Universität zu Köln",
        en: "Universität zu Köln"
      }
    },
    {
      entityid: "https://idp.tu-clausthal.de/idp/shibboleth",
      name: {
        de: "Technische Universität Clausthal",
        en: "Technische Universität Clausthal"
      }
    },
    {
      entityid: "https://idp.uni-bremen.de/idp/shibboleth",
      name: {
        de: "Universität Bremen",
        en: "Universität Bremen"
      }
    },
    {
      entityid: "https://idp.uni-oldenburg.de/idp/shibboleth",
      name: {
        de: "Universität Oldenburg",
        en: "Universität Oldenburg"
      }
    },
    {
      entityid: "https://idp.uni-potsdam.de/idp/shibboleth",
      name: {
        de: "Universität Potsdam",
        en: "University of Potsdam"
      }
    },
    {
      entityid: "https://idp.uni-tuebingen.de/shibboleth",
      name: {
        de: "Universität Tübingen",
        en: "Universität Tübingen"
      }
    },
    {
      entityid: "https://idp.uni-wuppertal.de/idp/shibboleth",
      name: {
        de: "Bergische Universität Wuppertal",
        en: "University of Wuppertal"
      }
    },
    {
      entityid: "https://idp2.jacobs-university.de/idp/shibboleth",
      name: {
        de: "Jacobs University Bremen gGmbH",
        en: "Jacobs University Bremen gGmbH"
      }
    },
    {
      entityid: "https://lmuidp.lrz.de/idp/shibboleth",
      name: {
        de: "Universität München (LMU)",
        en: "University of Munich (LMU)"
      }
    },
    {
      entityid: "https://login.uni-hamburg.de/idp/shibboleth",
      name: {
        de: "Universität Hamburg (UHH)",
        en: "Universität Hamburg (UHH)"
      }
    },
    {
      entityid: "https://shib-idp.awi.de/idp/shibboleth",
      name: {
        de: "Alfred-Wegener-Institut, Helmholtz-Zentrum für Polar- und Meeresforschung (AWI)",
        en: "Alfred Wegener Institute, Helmholtz Centre for Polar and Marine Research (AWI)"
      }
    },
    {
      entityid: "https://shib-idp.hs-osnabrueck.de/idp/shibboleth",
      name: {
        de: "Hochschule Osnabrück",
        en: "Hochschule Osnabrück"
      }
    },
    {
      entityid: "https://shib-idp.uni-osnabrueck.de/idp/shibboleth",
      name: {
        de: "Universität Osnabrück",
        en: "Universität Osnabrück"
      }
    },
    {
      entityid: "https://shibboleth-idp.gwdg.de/gwdg/shibboleth",
      name: {
        de: "Gesellschaft für wissenschaftliche Datenverarbeitung mbH Göttingen",
        en: "Gesellschaft für wissenschaftliche Datenverarbeitung mbH Göttingen"
      }
    },
    {
      entityid: "https://shibboleth-idp.mpg.de/mpg/shibboleth",
      name: {
        de: "Max-Planck Institute (im MetaDir der GWDG)",
        en: "Max-Planck Institutes (in MetaDir of GWDG)"
      }
    },
    {
      entityid: "https://shibboleth-idp.uni-goettingen.de/uni/shibboleth",
      name: {
        de: "Georg-August Universität Göttingen",
        en: "Georg-August University Göttingen"
      }
    },
    {
      entityid: "https://srv-aai01.daad.de/idp/shibboleth",
      name: {
        de: "Deutscher Akademischer Austauschdienst",
        en: "german academic exchange service"
      }
    },
    {
      entityid: "https://sso.hs-regensburg.de/idp/shibboleth",
      name: {
        de: "Ostbayerische Technische Hochschule Regensburg",
        en: "Ostbayerische Technische Hochschule Regensburg"
      }
    },
    {
      entityid: "https://tumidp.lrz.de/idp/shibboleth",
      name: {
        de: "Technische Universität München (TUM)",
        en: "Technical University of Munich (TUM)"
      }
    },
    {
      entityid: "https://www.sso.uni-erlangen.de/simplesaml/saml2/idp/metadata.php",
      name: {
        de: "Universität Erlangen-Nürnberg",
        en: "Universität Erlangen-Nürnberg"
      }
    },
    {
      entityid: "https://idp.dir.garr.it/idp/shibboleth",
      name: {
        en: "GARR",
        it: "GARR"
      }
    },
    {
      entityid: "https://idp.uniparthenope.it/idp/shibboleth",
      name: {
        en: "Università di Napoli Parthenope",
        it: "Università di Napoli Parthenope"
      }
    },
    {
      entityid: "https://idp.unimore.it/idp/shibboleth",
      name: {
        en: "University of Modena e Reggio Emilia",
        it: "Università degli Studi di Modena e Reggio Emilia"
      }
    },
    {
      entityid: "https://idp-iov.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS IOV Istituto Oncologico Veneto",
        it: "IRCCS IOV Istituto Oncologico Veneto"
      }
    },
    {
      entityid: "https://idp-sicilia.izs.garr.it/idp/shibboleth",
      name: {
        en: "IZS Sicilia",
        it: "IZS Sicilia"
      }
    },
    {
      entityid: "https://idp.uniurb.it/idp/shibboleth",
      name: {
        en: "Urbino University",
        it: "Università di Urbino"
      }
    },
    {
      entityid: "https://idea.ifc.cnr.it/idp/shibboleth",
      name: {
        en: "CNR Institute of Clinical Physiology",
        it: "CNR Istituto di Fisiologia Clinica"
      }
    },
    {
      entityid: "https://idp.iit.cnr.it/idp/shibboleth",
      name: {
        en: "CNR Institute of Informatics and Telematics",
        it: "CNR Istituto di Informatica e Telematica"
      }
    },
    {
      entityid: "https://idem-idp.ilc.cnr.it/idp/shibboleth",
      name: {
        en: "CNR Institute for Computational Linguistics \"Antonio Zampolli\"",
        it: "CNR Istituto di Linguistica Computazionale \"Antonio Zampolli\""
      }
    },
    {
      entityid: "https://idp.unitn.it/idp/shibboleth",
      name: {
        en: "University of Trento",
        it: "Università degli Studi di Trento"
      }
    },
    {
      entityid: "https://idem.unina2.it/idp/shibboleth",
      name: {
        en: "Second University of Naples",
        it: "Seconda Università degli Studi di Napoli"
      }
    },
    {
      entityid: "https://idp-iccu.beniculturali.garr.it/idp/shibboleth",
      name: {
        en: "ICCU - Central Institute for the Union Catalogue",
        it: "ICCU - Istituto Centrale per il Catalogo Unico"
      }
    },
    {
      entityid: "https://idp.infn.it/saml2/idp/metadata.php",
      name: {
        it: "INFN - Istituto Nazionale di Fisica Nucleare",
        en: "INFN - National Institute for Nuclear Physics"
      }
    },
    {
      entityid: "https://login.fmach.eu/idp/shibboleth",
      name: {
        it: "Fondazione Edmund Mach - Istituto Agrario di San Michele all'Adige",
        en: "Edmund Mach Foundation - Istituto Agrario di San Michele all'Adige"
      }
    },
    {
      entityid: "https://id.istat.it/idp/shibboleth",
      name: {
        en: "ISTAT - Italian National Institute of Statistics",
        it: "ISTAT - Istituto Nazionale di Statistica"
      }
    },
    {
      entityid: "https://idp.univpm.it/idp/shibboleth",
      name: {
        en: "University of Politecnica delle Marche",
        it: "Università Politecnica delle Marche"
      }
    },
    {
      entityid: "https://idp-cro.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS CRO di Aviano",
        it: "IRCCS CRO di Aviano"
      }
    },
    {
      entityid: "https://idp-emedea.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Eugenio Medea",
        it: "IRCCS Eugenio Medea"
      }
    },
    {
      entityid: "https://idp-portici.izs.garr.it/idp/shibboleth",
      name: {
        en: "IZS del Mezzogiorno",
        it: "IZS del Mezzogiorno"
      }
    },
    {
      entityid: "https://idp-oasi.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Associazione Oasi Maria SS. Onlus",
        it: "IRCCS Associazione Oasi Maria SS. Onlus"
      }
    },
    {
      entityid: "https://idp.unipg.it/idp/shibboleth",
      name: {
        en: "University of Perugia",
        it: "Università degli studi di Perugia"
      }
    },
    {
      entityid: "https://idp.unimc.it/idp/shibboleth",
      name: {
        en: "University of Macerata.",
        it: "Università degli Studi di Macerata"
      }
    },
    {
      entityid: "https://idp-stellamaris.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Fondazione Stella Maris",
        it: "IRCCS Fondazione Stella Maris"
      }
    },
    {
      entityid: "https://idp-dgnocchi.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Fondazione Don Carlo Gnocchi Onlus",
        it: "IRCCS Fondazione Don Carlo Gnocchi Onlus"
      }
    },
    {
      entityid: "https://idp-css.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Casa Sollievo della Sofferenza",
        it: "IRCCS Casa Sollievo della Sofferenza"
      }
    },
    {
      entityid: "https://idp.sissa.it/idp/shibboleth",
      name: {
        en: "SISSA",
        it: "SISSA"
      }
    },
    {
      entityid: "https://shibidp.cca.unipd.it/idp/shibboleth",
      name: {
        en: "University of Padova",
        it: "Università degli Studi di Padova"
      }
    },
    {
      entityid: "https://idem.ced.inaf.it/idp/shibboleth",
      name: {
        en: "National Institute for Astrophysics - INAF",
        it: "Istituto Nazionale di Astrofisica - INAF"
      }
    },
    {
      entityid: "https://idemfero.units.it/idp/shibboleth",
      name: {
        en: "University of Trieste",
        it: "Università di Trieste"
      }
    },
    {
      entityid: "https://idp.unipi.it/idp/shibboleth",
      name: {
        en: "University of Pisa",
        it: "Università degli Studi di Pisa"
      }
    },
    {
      entityid: "https://shib.unibo.it/idp/shibboleth",
      name: {
        it: "Università di Bologna",
        en: "University of Bologna"
      }
    },
    {
      entityid: "https://idp-ssbar.beniculturali.garr.it/idp/shibboleth",
      name: {
        en: "SSABAP RM - Soprintendenza Speciale Archeologia Belle Arti e Paesaggio di Roma",
        it: "SSABAP RM - Soprintendenza Speciale Archeologia Belle Arti e Paesaggio di Roma"
      }
    },
    {
      entityid: "https://idp.unint.eu/idp/shibboleth",
      name: {
        it: "Università degli Studi Internazionali di Roma - UNINT",
        en: "Università degli Studi Internazionali di Roma - UNINT"
      }
    },
    {
      entityid: "https://idp.eurac.edu/idp/shibboleth",
      name: {
        it: "EURAC",
        de: "EURAC",
        en: "EURAC"
      }
    },
    {
      entityid: "https://idp.unicam.it/idp/shibboleth",
      name: {
        en: "University of Camerino",
        it: "Università di Camerino"
      }
    },
    {
      entityid: "https://idp.unibz.it/idp/shibboleth",
      name: {
        it: "Libera Università di Bolzano",
        de: "Freie Universität Bozen",
        en: "Free University of Bolzano"
      }
    },
    {
      entityid: "https://idp-ifo.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS IFO - Rome",
        it: "IRCCS IFO - Roma"
      }
    },
    {
      entityid: "https://idp-inrca.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS INRCA - Ancona",
        it: "IRCCS INRCA - Ancona"
      }
    },
    {
      entityid: "https://idp-srpisana.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS San Raffaele Pisana - Rome",
        it: "IRCCS San Raffaele Pisana - Roma"
      }
    },
    {
      entityid: "https://idp-scamillo.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Fondazione Ospedale San Camillo - Venice",
        it: "IRCCS Fondazione Ospedale San Camillo - Venezia"
      }
    },
    {
      entityid: "https://idp-maugeri.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS ICS Maugeri - Pavia",
        it: "IRCCS ICS Maugeri - Pavia"
      }
    },
    {
      entityid: "https://idp-sdn.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS SDN - Napoli",
        it: "IRCCS SDN - Napoli"
      }
    },
    {
      entityid: "https://idp-aux.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Auxologico - Milano",
        it: "IRCCS Auxologico - Milano"
      }
    },
    {
      entityid: "https://idp-intna.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Pascale - Napoli",
        it: "IRCCS Istituto Nazionale Tumori \"Fondazione G. Pascale\" Napoli"
      }
    },
    {
      entityid: "https://idp-istba.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Istituto Tumori \"Giovanni Paolo II\" - Bari",
        it: "IRCCS Istituto Tumori \"Giovanni Paolo II\" - Bari"
      }
    },
    {
      entityid: "https://idp.isprambiente.it/idp/shibboleth",
      name: {
        en: "ISPRA Istituto Superiore per la Protezione e Ricerca Ambientale",
        it: "ISPRA Istituto Superiore per la Protezione e Ricerca Ambientale"
      }
    },
    {
      entityid: "https://idp-fbf.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS FBF - Brescia",
        it: "IRCCS FBF - Brescia"
      }
    },
    {
      entityid: "https://idp-debellis.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS \"S. de Bellis\" - Castellana Grotte (BARI)",
        it: "IRCCS \"S. de Bellis\" - Castellana Grotte (BARI)"
      }
    },
    {
      entityid: "https://idp.unisannio.it/idp/shibboleth",
      name: {
        en: "University of Sannio",
        it: "Università degli Studi del Sannio"
      }
    },
    {
      entityid: "https://idp-ismett.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS ISMETT - Palermo",
        it: "IRCCS ISMETT - Palermo"
      }
    },
    {
      entityid: "https://idp-ieo.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS IEO - Milano",
        it: "IRCCS IEO - Milano"
      }
    },
    {
      entityid: "https://idp.ego-gw.it/idp/shibboleth",
      name: {
        en: "European Gravitational Observatory",
        it: "European Gravitational Observatory"
      }
    },
    {
      entityid: "https://idp-burlog.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Burlo Garofolo - Trieste",
        it: "IRCCS Burlo Garofolo - Trieste"
      }
    },
    {
      entityid: "https://idem-idp.uniud.it/idp/shibboleth",
      name: {
        it: "Università degli Studi di Udine",
        en: "University of Udine"
      }
    },
    {
      entityid: "https://auth.unisa.it/idp/shibboleth",
      name: {
        it: "Università degli Studi di Salerno",
        en: "University of Salerno"
      }
    },
    {
      entityid: "https://idp-neuromed.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Neuromed Pozzilli (IS)",
        it: "IRCCS Neuromed Pozzilli (IS)"
      }
    },
    {
      entityid: "https://idp-crob.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS CROB - Rionero in Vulture (PZ)",
        it: "IRCCS CROB - Rionero in Vulture (PZ)"
      }
    },
    {
      entityid: "https://idp-sanmatteo.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS San Matteo - Pavia",
        it: "IRCCS San Matteo - Pavia"
      }
    },
    {
      entityid: "https://idp-isnb.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Istituto delle Scienze Neurologiche - Bologna",
        it: "IRCCS Istituto delle Scienze Neurologiche - Bologna"
      }
    },
    {
      entityid: "https://idp-ccmonz.irccs.garr.it/idp/shibboleth",
      name: {
        en: "IRCCS Centro Cardiologico Monzino - Milano",
        it: "IRCCS Centro Cardiologico Monzino - Milano"
      }
    },
    {
      entityid: "https://papi.kfki.hu/idp/shibboleth",
      name: {
        en: "Wigner Research Centre for Physics",
        hu: "Wigner Fizikai Kutatóközpont"
      }
    },
    {
      entityid: "https://idp.csfk.mta.hu/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Research Centre for Astronomy and Earth Sciences",
        hu: "MTA Csillagászati és Földtudományi Kutatóközpont"
      }
    },
    {
      entityid: "https://idp.mah.se/idp/shibboleth",
      name: {
        sv: "Malmö universitet",
        en: "Malmö University"
      }
    },
    {
      entityid: "https://idp2-1.slu.se/idp/shibboleth",
      name: {
        sv: "Sveriges Lantbruksuniversitet",
        en: "Swedish University of Agricultural Science"
      }
    },
    {
      entityid: "https://login.it.liu.se/idp/shibboleth",
      name: {
        sv: "Linköpings Universitet - old",
        en: "Linköping University - old"
      }
    },
    {
      entityid: "https://idp.hkr.se/idp/shibboleth",
      name: {
        sv: "Högskolan Kristianstad",
        en: "Kristianstad University Sweden"
      }
    },
    {
      entityid: "https://idp.it.su.se/idp/shibboleth",
      name: {
        sv: "Stockholms universitet",
        en: "Stockholm University"
      }
    },
    {
      entityid: "http://fs.liu.se/adfs/services/trust",
      name: {
        sv: "Linköpings universitet",
        en: "Linköping University"
      }
    },
    {
      entityid: "https://weblogin.uu.se/idp/shibboleth",
      name: {
        sv: "Uppsala universitet",
        en: "Uppsala University"
      }
    },
    {
      entityid: "https://login.idp.eduid.se/idp.xml",
      name: {
        sv: "eduID Sverige",
        en: "eduID Sweden"
      }
    },
    {
      entityid: "https://idpv3.lu.se/idp/shibboleth",
      name: {
        sv: "Lunds universitet",
        en: "Lund University"
      }
    },
    {
      entityid: "https://idp2.bth.se/idp/shibboleth",
      name: {
        sv: "Blekinge Tekniska Högskola",
        en: "Blekinge Institute of Technology"
      }
    },
    {
      entityid: "https://swamid.vr.se/idp/shibboleth",
      name: {
        sv: "Vetenskapsrådet",
        en: "The Swedish Research Council"
      }
    },
    {
      entityid: "https://weblogin.kau.se/idp/shibboleth",
      name: {
        sv: "Karlstads universitet",
        en: "Karlstad University"
      }
    },
    {
      entityid: "https://idp3.it.gu.se/idp/shibboleth",
      name: {
        sv: "Göteborgs Universitet",
        en: "University of Gothenburg"
      }
    },
    {
      entityid: "https://idp.hj.se/idp/shibboleth",
      name: {
        sv: "Högskolan i Jönköping",
        en: "Jönköping University"
      }
    },
    {
      entityid: "https://saml.sys.kth.se/idp/shibboleth",
      name: {
        sv: "Kungliga Tekniska högskolan (KTH)",
        en: "KTH Royal Institute of Technology"
      }
    },
    {
      entityid: "http://adfs.nrm.se/adfs/services/trust",
      name: {
        sv: "Naturhistoriska riksmuseet",
        en: "Swedish Museum of Natural History"
      }
    },
    {
      entityid: "https://tullbommen.arcada.fi/simplesaml/",
      name: {
        en: "Arcada",
        sv: "Arcada",
        fi: "Arcada"
      }
    },
    {
      entityid: "https://idp2.jamk.fi/idp/shibboleth",
      name: {
        en: "Jyväskylä University of Applied Sciences",
        sv: "JAMK",
        fi: "Jyväskylän ammattikorkeakoulu"
      }
    },
    {
      entityid: "https://login.jyu.fi/idp/shibboleth",
      name: {
        en: "University of Jyväskylä",
        sv: "Jyväskylä universitet",
        fi: "Jyväskylän yliopisto"
      }
    },
    {
      entityid: "https://idp2.tamk.fi",
      name: {
        en: "Tampere University of Applied Sciences",
        sv: "Tampereen ammattikorkeakoulu",
        fi: "Tampereen ammattikorkeakoulu"
      }
    },
    {
      entityid: "https://idp.lut.fi",
      name: {
        en: "Lappeenranta University of Technology",
        sv: "Lappeenranta Tekniska Högskolan",
        fi: "Lappeenrannan teknillinen yliopisto"
      }
    },
    {
      entityid: "https://idp.shh.fi/idp/shibboleth",
      name: {
        en: "Hanken School of Economics",
        sv: "Hanken Svenska handelshögskolan",
        fi: "Hanken Svenska handelshögskolan"
      }
    },
    {
      entityid: "https://idp.ulapland.fi/idp/shibboleth",
      name: {
        en: "University of Lapland",
        sv: "Lapplands universitet",
        fi: "Lapin yliopisto"
      }
    },
    {
      entityid: "https://sipuli.fmi.fi/idp/shibboleth",
      name: {
        en: "Finnish Meteorological Institute",
        sv: "Meteorologiska institutet",
        fi: "Ilmatieteen laitos"
      }
    },
    {
      entityid: "https://shibboleth.uta.fi/idp/shibboleth",
      name: {
        en: "University of Tampere",
        sv: "Tammerfors universitet",
        fi: "Tampereen yliopisto"
      }
    },
    {
      entityid: "https://login.oulu.fi/idp/shibboleth",
      name: {
        en: "University of Oulu",
        sv: "Uleåborgs universitet",
        fi: "Oulun yliopisto"
      }
    },
    {
      entityid: "https://sso.utu.fi/sso-idp",
      name: {
        en: "University of Turku",
        sv: "Åbo universitet",
        fi: "Turun yliopisto"
      }
    },
    {
      entityid: "https://idp.csc.fi/idp/shibboleth",
      name: {
        en: "CSC - IT Center for Science Ltd.",
        sv: "CSC - Tieteen tietotekniikan keskus Oy",
        fi: "CSC - Tieteen tietotekniikan keskus Oy"
      }
    },
    {
      entityid: "https://idp.abo.fi/idp/shibboleth",
      name: {
        en: "Åbo Akademi University",
        sv: "Åbo Akademi",
        fi: "Åbo Akademi"
      }
    },
    {
      entityid: "https://idp.tut.fi/shibboleth2",
      name: {
        en: "Tampere University of Technology",
        sv: "Tammerfors tekniska universitet",
        fi: "Tampereen teknillinen yliopisto"
      }
    },
    {
      entityid: "https://login.helsinki.fi/shibboleth",
      name: {
        en: "University of Helsinki",
        sv: "Helsingfors universitet",
        fi: "Helsingin yliopisto"
      }
    },
    {
      entityid: "https://idp.metropolia.fi/idp",
      name: {
        en: "Metropolia University of Applied Sciences",
        sv: "Metropolia yrkeshögskola",
        fi: "Metropolia Ammattikorkeakoulu"
      }
    },
    {
      entityid: "https://tunnistus.thl.fi/idp",
      name: {
        en: "National Institute for Health and Welfare",
        sv: "Institutet för hälsa och välfärd",
        fi: "Terveyden ja hyvinvoinnin laitos"
      }
    },
    {
      entityid: "https://idp.uef.fi/idp/shibboleth",
      name: {
        en: "University of Eastern Finland",
        sv: "Östra Finlands universitet",
        fi: "Itä-Suomen yliopisto"
      }
    },
    {
      entityid: "https://haka.saimia.fi/idp/shibboleth",
      name: {
        en: "Saimaa University of Applied Sciences",
        sv: "Yrkehögskola Saimaa",
        fi: "Saimaan ammattikorkeakoulu"
      }
    },
    {
      entityid: "https://idp.aalto.fi/idp/shibboleth",
      name: {
        en: "Aalto University",
        sv: "Aalto-universitetet",
        fi: "Aalto-yliopisto"
      }
    },
    {
      entityid: "https://idp.uniarts.fi/shibboleth",
      name: {
        en: "University of the Arts Helsinki",
        sv: "Konstuniversitetet",
        fi: "Taideyliopisto"
      }
    },
    {
      entityid: "https://idp.tuni.fi/idp/shibboleth",
      name: {
        en: "Tampere Universities",
        sv: "Tampere Universities",
        fi: "Tampereen korkeakoulut"
      }
    },
    {
      entityid: "https://login.uwasa.fi/idp/shibboleth",
      name: {
        en: "University of Vaasa",
        sv: "Vasa Universitet",
        fi: "Vaasan yliopisto"
      }
    },
    {
      entityid: "https://idpstaff-ha.belnet.be/idp/shibboleth",
      name: {
        en: "Belnet"
      }
    },
    {
      entityid: "https://idpx.ua.ac.be/idp/shibboleth",
      name: {
        en: "Universiteit Antwerpen"
      }
    },
    {
      entityid: "https://identity.ugent.be/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Ghent University",
        nl: "Universiteit Gent"
      }
    },
    {
      entityid: "urn:mace:kuleuven.be:kulassoc:kuleuven.be",
      name: {
        nl: "Associatie KU Leuven",
        en: "KU Leuven Association"
      }
    },
    {
      entityid: "http://sts1.vib.be/adfs/services/trust",
      name: {
        en: "VIB"
      }
    },
    {
      entityid: "https://idp.vub.ac.be/idp/shibboleth",
      name: {
        en: "VUB - IDP (Vrije Universiteit Brussel)"
      }
    },
    {
      entityid: "https://idp.ulb.ac.be/idp/shibboleth",
      name: {
        en: "IDP - ULB (Universite libre de Bruxelles)"
      }
    },
    {
      entityid: "https://idp.usask.ca/idp/shibboleth",
      name: {
        en: "University of Saskatchewan"
      }
    },
    {
      entityid: "https://idp.unb.ca/idp/shibboleth",
      name: {
        en: "University of New Brunswick"
      }
    },
    {
      entityid: "https://idp.uvic.ca/idp/shibboleth",
      name: {
        en: "University of Victoria"
      }
    },
    {
      entityid: "https://idp.canarie.ca/idp/shibboleth",
      name: {
        en: "CANARIE"
      }
    },
    {
      entityid: "https://idp.sfu.ca/entity",
      name: {
        en: "Simon Fraser University"
      }
    },
    {
      entityid: "http://cufed.carleton.ca/adfs/services/trust",
      name: {
        en: "Carleton University"
      }
    },
    {
      entityid: "https://idpz.utorauth.utoronto.ca/shibboleth",
      name: {
        en: "University of Toronto"
      }
    },
    {
      entityid: "https://idp.computecanada.ca/idp/shibboleth",
      name: {
        en: "Compute Canada",
        fr: "Calcul Canada"
      }
    },
    {
      entityid: "http://adfs-bci.ubishops.ca/adfs/services/trust",
      name: {
        en: "Bishops University",
        fr: "Université Bishops"
      }
    },
    {
      entityid: "http://federation.langara.ca/adfs/services/trust",
      name: {
        en: "Langara College"
      }
    },
    {
      entityid: "https://prdshib.macewan.ca/idp/shibboleth",
      name: {
        en: "MacEwan University"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.eaaa.dk/adfs/services/trust",
      name: {
        da: "Erhvervsakademi Aarhus",
        en: "Business Academy Aarhus"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sso.basyd.dk/adfs/services/trust",
      name: {
        da: "IBA Erhvervsakademi Kolding",
        en: "IBA International Business Academy"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.aams.dk/simplesaml/saml2/idp/metadata.php",
      name: {
        da: "Aarhus Maskinmesterskole",
        en: "Aarhus School of Marine and Technical Engineering"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/auth.msk.dk/adfs/services/trust",
      name: {
        da: "Maskinmesterskolen København",
        en: "Copenhagen School of Marine Engineering and Technology Management"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/orphanage.wayf.dk",
      name: {
        da: "WAYF Orphanage [for udviklere]",
        en: "WAYF Orphanage [for developers]"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sts.ait.dtu.dk/adfs/services/trust",
      name: {
        da: "Danmarks Tekniske Universitet",
        en: "Technical University of Denmark (DTU)"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.ibc.dk/adfs/services/trust",
      name: {
        da: "International Business College",
        en: "International Business College"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/sso.ucl.dk/simplesaml/saml2/idp/metadata.php",
      name: {
        da: "UCL Erhvervsakademi og Professionshøjskole",
        en: "UCL University College"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.kea.dk/adfs/services/trust",
      name: {
        da: "KEA – Københavns Erhvervsakademi",
        en: "KEA – Copenhagen School of Design and Technology"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.dskd.dk/adfs/services/trust",
      name: {
        da: "Designskolen Kolding",
        en: "Design School Kolding"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.supportcenter.dk/its/saml2/idp/metadata.php?unit=its",
      name: {
        da: "IT-Supportcentret (ITS)",
        en: "IT-Supportcentret (ITS)"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/idp.fms.dk/adfs/services/trust",
      name: {
        da: "Fredericia Maskinmesterskole",
        en: "Fredericia Maskinmesterskole"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.frhavn-gym.dk/simplesaml/saml2/idp/metadata.php",
      name: {
        da: "Frederikshavn Gymnasium & HF-kursus",
        en: "Frederikshavn Gymnasium & HF-kursus"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.eal.dk/adfs/services/trust",
      name: {
        da: "Erhvervsakademiet Lillebælt",
        en: "Lillebaelt Academy"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.cphbusiness.dk/adfs/services/trust",
      name: {
        da: "Cphbusiness",
        en: "Cphbusiness"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.dmjx.dk/adfs/services/trust",
      name: {
        da: "Danmarks Medie- og Journalisthøjskole [TEST]",
        en: "Danish School of Media and Journalism [TEST]"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.college360.dk/adfs/services/trust",
      name: {
        da: "College360",
        en: "College360"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/adfs.smk.dk/adfs/services/trust",
      name: {
        da: "Statens Museum for Kunst – SMK",
        en: "National Gallery of Denmark – SMK"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sts.statsbiblioteket.dk/adfs/services/trust",
      name: {
        da: "Statsbiblioteket – ansatte",
        en: "State and University Library – employees"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/federation.ku.dk/adfs/services/trust",
      name: {
        da: "Københavns Universitet",
        en: "University of Copenhagen"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.knord.dk/adfs/services/trust",
      name: {
        da: "Knord",
        en: "Knord Business College"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.hi.is/simplesaml/saml2/idp/metadata.php",
      name: {
        da: "Háskóli Íslands",
        en: "University of Iceland"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sso.hrs.dk/adfs/services/trust",
      name: {
        da: "Hotel- og Restaurantskolen",
        en: "Copenhagen Hospitality College"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.ucn.dk/adfs/services/trust",
      name: {
        da: "Professionshøjskolen UCN",
        en: "UCN"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.itu.dk/saml2/idp/metadata.php",
      name: {
        da: "IT-Universitetet i København",
        en: "IT University of Copenhagen"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fg.ucsyd.dk/adfs/services/trust",
      name: {
        da: "UC SYD",
        en: "University College South Denmark"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.rungsted-gym.dk/saml2/idp/metadata.php",
      name: {
        da: "Rungsted Gymnasium",
        en: "Rungsted Gymnasium"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.ait.dtu.dk/saml2/idp/metadata.php",
      name: {
        da: "Danmarks Tekniske Universitet [GL]",
        en: "Technical University of Denmark (DTU) [OLD]"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.glasir.fo/adfs/services/trust",
      name: {
        da: "Glasir",
        en: "Glasir Tórshavn College"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.dsl.dk/saml2/idp/metadata.php",
      name: {
        da: "Det Danske Sprog- og Litteraturselskab",
        en: "Society for Danish Language and Literature"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.edu.simac.dk/adfs/services/trust",
      name: {
        da: "SIMAC",
        en: "SIMAC"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.ucc.dk/saml2/idp/metadata.php",
      name: {
        da: "Københavns Professionshøjskole (tidligere Professionshøjskolen UCC)",
        en: "University College Copenhagen (formerly University College Capital)"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.learnmark.dk/adfs/services/trust",
      name: {
        da: "Learnmark Horsens",
        en: "Learnmark Horsens"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sso.easv.dk/adfs/services/trust",
      name: {
        da: "Erhvervsakademi SydVest",
        en: "Business Academy SouthWest (EASV)"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs4.grenaa-gym.dk/adfs/services/trust",
      name: {
        da: "Grenaa Gymnasium",
        en: "Grenaa Gymnasium"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/sso.sdu.dk/wayf",
      name: {
        da: "Syddansk Universitet",
        en: "University of Southern Denmark"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/login.phmetropol.dk/adfs/services/trust",
      name: {
        da: "Københavns Professionshøjskole (tidligere Professionshøjskolen Metropol)",
        en: "University College Copenhagen (formerly Metropolitan University College)"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs4.sosuoj.dk/adfs/services/trust",
      name: {
        da: "SOSU Østjylland",
        en: "Basic Health Care College Eastern Jutland"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.zbc.dk/adfs/services/trust",
      name: {
        da: "ZBC – Zealand Business College",
        en: "ZBC – Zealand Business College"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.via.dk/adfs/services/trust",
      name: {
        da: "VIA University College",
        en: "VIA University College"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs.easj.dk/adfs/services/trust",
      name: {
        da: "Zealand – Sjællands Erhvervsakademi",
        en: "Zealand"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.frsgym.dk/adfs/services/trust",
      name: {
        da: "Frederikssund Gymnasium",
        en: "Frederikssund Gymnasium"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.musikkons.dk/adfs/services/trust",
      name: {
        da: "Det Jyske Musikkonservatorium",
        en: "Royal Academy of Music Aarhus/Aalborg (RAMA)"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/saml.signon.ruc.dk/idp",
      name: {
        da: "Roskilde Universitet (RUC)",
        en: "Roskilde University (RUC)"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/sts.windows.net/46f7cafd-ebfa-40a6-98de-bb0ab0df227a/",
      name: {
        da: "Energimuseet",
        en: "Danish Museum of Energy"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/cas.cbs.dk/saml/saml2/idp/metadata.php",
      name: {
        da: "Copenhagen Business School",
        en: "Copenhagen Business School"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/idp.umit.dk",
      name: {
        da: "Uddannelsesministeriets It",
        en: "IT Department of the Ministry of Higher Education"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sso.eamv.dk/adfs/services/trust",
      name: {
        da: "Erhvervsakademi MidtVest",
        en: "Erhvervsakademi MidtVest"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.drcmr.dk/auth",
      name: {
        da: "MR-Forskningssektionen (DRCMR)",
        en: "Danish Research Centre for Magnetic Resonance"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sso.sde.dk/adfs/services/trust",
      name: {
        da: "Syddansk Erhvervsskole",
        en: "SDE College"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/adfs.vordingborg-gym.dk/adfs/services/trust",
      name: {
        da: "Vordingborg Gymnasium & HF",
        en: "Vordingborg Gymnasium & HF"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayfeadania.itcn.dk/simplesaml/saml2/idp/metadata.php",
      name: {
        da: "Erhvervsakademi Dania",
        en: "Dania – Danish Academy of Business and Technology"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/sts.pha.dk/adfs/services/trust",
      name: {
        da: "Professionshøjskolen Absalon",
        en: "Absalon University College"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.aau.dk",
      name: {
        da: "Aalborg Universitet",
        en: "Aalborg University"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.au.dk",
      name: {
        da: "Aarhus Universitet",
        en: "Aarhus University"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/wayf.regionsjaelland.dk/adfs/services/trust",
      name: {
        da: "Region Sjælland",
        en: "Region Zealand"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/fs4.paderup-gym.dk/adfs/services/trust",
      name: {
        da: "Paderup Gymnasium",
        en: "Paderup Gymnasium"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/wayf.kb.dk/stafflogin",
      name: {
        da: "Det Kongelige Bibliotek – ansatte",
        en: "The Royal Library – employees"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/saml1.dmjx.dk/simplesaml/saml2/idp/metadata.php",
      name: {
        da: "Danmarks Medie- og Journalisthøjskole",
        en: "Danish School of Media and Journalism"
      }
    },
    {
      entityid: "https://birk.wayf.dk/birk.php/auth.fak.dk/saml2/idp/metadata.php",
      name: {
        da: "Forsvarets Bibliotekscenter",
        en: "Danish Defence Library Center"
      }
    },
    {
      entityid: "http://birk.wayf.dk/birk.php/sts.kadk.dk/adfs/services/trust",
      name: {
        da: "Kunstakademiets skoler for Arkitektur, Design og Konservering",
        en: "The Royal Danish Academy of Fine Arts Schools of Architecture, Design and Conservation"
      }
    },
    {
      entityid: "https://idp.inra.fr/idp/shibboleth",
      name: {
        en: "INRA - Institut National de la Recherche Agronomique",
        fr: "INRA - Institut National de la Recherche Agronomique"
      }
    },
    {
      entityid: "https://idp.pasteur.fr/idp/shibboleth",
      name: {
        en: "Institut Pasteur",
        fr: "Institut Pasteur"
      }
    },
    {
      entityid: "https://idp.unistra.fr/idp/shibboleth",
      name: {
        en: "University of Strasbourg",
        fr: "Université de Strasbourg"
      }
    },
    {
      entityid: "https://idp1.inria.fr/idp/shibboleth",
      name: {
        en: "INRIA - Institut National de Recherche en Informatique et Automatique",
        fr: "INRIA - Institut National de Recherche en Informatique et Automatique"
      }
    },
    {
      entityid: "https://janus.cnrs.fr/idp",
      name: {
        en: "CNRS",
        fr: "CNRS"
      }
    },
    {
      entityid: "https://idp2.iay.org.uk/idp/shibboleth",
      name: {
        en: "Ian A. Young"
      }
    },
    {
      entityid: "https://idp.cardiff.ac.uk/shibboleth",
      name: {
        en: "Cardiff University",
        cy: "Prifysgol Caerdydd"
      }
    },
    {
      entityid: "https://registry.shibboleth.ox.ac.uk/idp",
      name: {
        en: "University of Oxford"
      }
    },
    {
      entityid: "https://shibboleth.imperial.ac.uk/shibboleth",
      name: {
        en: "Imperial College London"
      }
    },
    {
      entityid: "https://shib.raven.cam.ac.uk/shibboleth",
      name: {
        en: "University of Cambridge"
      }
    },
    {
      entityid: "https://idp01.stfc.ac.uk/shibboleth",
      name: {
        en: "Science and Technology Facilities Council"
      }
    },
    {
      entityid: "https://idp.kingston.ac.uk/shibboleth",
      name: {
        en: "Kingston University London"
      }
    },
    {
      entityid: "https://idp.gla.ac.uk/shibboleth",
      name: {
        en: "University of Glasgow"
      }
    },
    {
      entityid: "https://shib.manchester.ac.uk/shibboleth",
      name: {
        en: "University of Manchester"
      }
    },
    {
      entityid: "https://idp-dev.cardiff.ac.uk/idp/shibboleth",
      name: {
        en: "Cardiff University (Test - Dev)"
      }
    },
    {
      entityid: "https://idp.st-andrews.ac.uk/shibboleth",
      name: {
        en: "University of St Andrews"
      }
    },
    {
      entityid: "https://idp.bham.ac.uk/shibboleth",
      name: {
        en: "University of Birmingham"
      }
    },
    {
      entityid: "https://idp.ed.ac.uk/shibboleth",
      name: {
        en: "University of Edinburgh"
      }
    },
    {
      entityid: "https://idp.colegsirgar.ac.uk/shibboleth",
      name: {
        en: "Coleg Sir Gar"
      }
    },
    {
      entityid: "https://idp.le.ac.uk/shibboleth",
      name: {
        en: "University of Leicester"
      }
    },
    {
      entityid: "https://idp.bbsrc.ac.uk/rothamsted",
      name: {
        en: "Rothamsted Research"
      }
    },
    {
      entityid: "https://idp-preprod.cardiff.ac.uk/idp/shibboleth",
      name: {
        en: "Cardiff University (Test - Preprod)"
      }
    },
    {
      entityid: "https://kclidp.kcl.ac.uk/idp/shibboleth",
      name: {
        en: "King's College London"
      }
    },
    {
      entityid: "https://qub.ac.uk/shibboleth",
      name: {
        en: "Queen's University Belfast"
      }
    },
    {
      entityid: "https://idp.sanger.ac.uk/idp/shibboleth",
      name: {
        en: "Wellcome Trust Sanger Institute"
      }
    },
    {
      entityid: "https://idp.ebi.ac.uk/idp/shibboleth",
      name: {
        en: "European Molecular Biology Laboratory - EMBL-EBI"
      }
    },
    {
      entityid: "https://shibboleth.imperial.ac.uk/idp/shibboleth",
      name: {
        en: "Imperial College London TEST"
      }
    },
    {
      entityid: "https://idp.nbi.ac.uk/idp/shibboleth",
      name: {
        en: "Norwich Bioscience Institutes"
      }
    },
    {
      entityid: "https://idpdev.bham.ac.uk/idp/shibboleth",
      name: {
        en: "University of Birmingham (Development IdP)"
      }
    },
    {
      entityid: "https://idp.unitedid.org/idp/shibboleth",
      name: {
        en: "United ID"
      }
    },
    {
      entityid: "https://kclidpdev.kcl.ac.uk/idp/shibboleth",
      name: {
        en: "King's College London (Development IDP)"
      }
    },
    {
      entityid: "https://yin.faheystuart.co.uk/idp/shibboleth",
      name: {
        en: "Alexander Stuart test IdP (yin)"
      }
    },
    {
      entityid: "https://idp.ceredigion.ac.uk/shibboleth",
      name: {
        en: "Coleg Ceredigion"
      }
    },
    {
      entityid: "https://proxy.eduteams.org/proxy",
      name: {
        en: "eduTEAMS"
      }
    },
    {
      entityid: "https://idp.aco.net/idp/shibboleth",
      name: {
        de: "ACOnet Team",
        en: "ACOnet staff"
      }
    },
    {
      entityid: "https://login.fhv.at/shibboleth",
      name: {
        de: "Fachhochschule Vorarlberg",
        en: "Vorarlberg University of Applied Sciences"
      }
    },
    {
      entityid: "https://shibboleth.fhwn.ac.at/idp/shibboleth",
      name: {
        de: "FH Wiener Neustadt",
        en: "University of Applied Sciences Wiener Neustadt"
      }
    },
    {
      entityid: "https://idp.zid.tuwien.ac.at/saml2",
      name: {
        de: "Technische Universität Wien",
        en: "Vienna University of Technology"
      }
    },
    {
      entityid: "https://shibboleth.im.jku.at/idp/shibboleth",
      name: {
        de: "Johannes Kepler Universität Linz",
        en: "Johannes Kepler University Linz"
      }
    },
    {
      entityid: "https://idp.fh-kaernten.at/idp/shibboleth",
      name: {
        de: "Fachhochschule Kärnten",
        en: "Carinthia University of Applied Sciences"
      }
    },
    {
      entityid: "https://sso.sbg.ac.at/idp/shibboleth",
      name: {
        de: "Universität Salzburg",
        en: "University of Salzburg"
      }
    },
    {
      entityid: "https://sso.tugraz.at/idp/shibboleth",
      name: {
        de: "Technische Universität Graz",
        en: "Graz University of Technology"
      }
    },
    {
      entityid: "https://idp.vu-wien.ac.at/idp/shibboleth",
      name: {
        de: "Veterinärmedizinische Universität Wien",
        en: "University of Veterinary Medicine, Vienna"
      }
    },
    {
      entityid: "https://shib.ihs.ac.at/idp/shibboleth",
      name: {
        de: "Institut für Höhere Studien (IHS)",
        en: "Institute for Advanced Studies (IHS)"
      }
    },
    {
      entityid: "https://idp.fh-joanneum.at/idp/shibboleth",
      name: {
        de: "FH Joanneum",
        en: "FH Joanneum"
      }
    },
    {
      entityid: "https://idp.ist.ac.at/idp/shibboleth",
      name: {
        de: "Institute of Science and Technology Austria (IST Austria)",
        en: "Institute of Science and Technology Austria (IST Austria)"
      }
    },
    {
      entityid: "https://auth.ph-noe.ac.at/idp/shibboleth",
      name: {
        de: "Pädagogische Hochschule Niederösterreich",
        en: "Pädagogische Hochschule Niederösterreich"
      }
    },
    {
      entityid: "https://idp.phst.at/idp/shibboleth",
      name: {
        de: "Pädagogische Hochschule Steiermark",
        en: "University College of Teacher Education Styria"
      }
    },
    {
      entityid: "https://login.bruckneruni.at/idp/shibboleth",
      name: {
        de: "Anton Bruckner Privatuniversität",
        en: "Anton Bruckner Private University"
      }
    },
    {
      entityid: "https://idp.fernfh.ac.at/idp/shibboleth",
      name: {
        de: "Ferdinand Porsche FernFH",
        en: "Ferdinand Porsche FernFH"
      }
    },
    {
      entityid: "https://idp.kphvie.ac.at/idp/shibboleth",
      name: {
        de: "Kirchliche Pädagogische Hochschule Wien/Krems (KPH)",
        en: "University College of Teacher Education Vienna/Krems (KPH)"
      }
    },
    {
      entityid: "https://sso.fhstp.ac.at/idp/shibboleth",
      name: {
        de: "Fachhochschule St. Pölten",
        en: "St. Pölten University of Applied Sciences"
      }
    },
    {
      entityid: "https://login.kug.ac.at/idp/shibboleth",
      name: {
        de: "Universität für Musik und darstellende Kunst Graz",
        en: "University of Music and Performing Arts Graz"
      }
    },
    {
      entityid: "https://idp.wu.ac.at/idp/shibboleth",
      name: {
        de: "Wirtschaftsuniversität Wien",
        en: "Vienna University of Economics and Business"
      }
    },
    {
      entityid: "https://idp.fh-burgenland.at/idp/shibboleth",
      name: {
        de: "FH Burgenland",
        en: "University of Applied Sciences Burgenland"
      }
    },
    {
      entityid: "https://shibboleth.i-med.ac.at/idp/shibboleth",
      name: {
        de: "Medizinische Universität Innsbruck",
        en: "Medical University of Innsbruck"
      }
    },
    {
      entityid: "https://weblogin.univie.ac.at/shibboleth",
      name: {
        de: "Universität Wien",
        en: "University of Vienna"
      }
    },
    {
      entityid: "https://sso.ku-linz.at/idp/shibboleth",
      name: {
        de: "Katholische Privat-Universität Linz",
        en: "Catholic Private University Linz"
      }
    },
    {
      entityid: "https://sso.ph-linz.at/idp/shibboleth",
      name: {
        de: "Private Pädagogische Hochschule der Diözese Linz",
        en: "Private University of Education of the Diocese of Linz"
      }
    },
    {
      entityid: "https://sso.fhgooe.ac.at/idp/shibboleth",
      name: {
        de: "FH Gesundheitsberufe OÖ",
        en: "University of Applied Sciences for Health Professions Upper Austria"
      }
    },
    {
      entityid: "https://shib.mdw.ac.at/idp/shibboleth",
      name: {
        de: "Universität für Musik und darstellende Kunst Wien",
        en: "University of Music and Performing Arts Vienna"
      }
    },
    {
      entityid: "https://idp.mf.uni-lj.si/idp/20111101",
      name: {
        en: "University of Ljubljana, Faculty of Medicine",
        sl: "Univerza v Ljubljani, Medicinska fakulteta"
      }
    },
    {
      entityid: "https://idp.uni-lj.si/idp/20100525",
      name: {
        en: "University of Ljubljana",
        sl: "Univerza v Ljubljani"
      }
    },
    {
      entityid: "https://idp2.dcu.ie/idp/profile/Metadata/SAML",
      name: {
        en: "Dublin City University"
      }
    },
    {
      entityid: "https://idp.heanet.ie/idp/shibboleth",
      name: {
        en: "HEAnet Staff"
      }
    },
    {
      entityid: "https://idp.gmit.ie/idp/shibboleth",
      name: {
        ga: "Institúid Teicneolaíochta na Gaillimhe-Maigh Eo",
        en: "Galway-Mayo Institute of Technology"
      }
    },
    {
      entityid: "https://idp.dit.ie/idp/shibboleth",
      name: {
        en: "TU Dublin - City Campus",
        ga: "OT Baile Átha Cliath"
      }
    },
    {
      entityid: "https://sso.ucd.ie/idp/shibboleth",
      name: {
        en: "University College Dublin",
        ga: "An Coláiste Ollscoile, Baile Átha Cliath"
      }
    },
    {
      entityid: "https://hidp.ucc.ie/idp/shibboleth",
      name: {
        en: "University College Cork",
        ga: "Coláiste na hOllscoile Corcaigh"
      }
    },
    {
      entityid: "https://idp.rcpi.ie/idp/shibboleth",
      name: {
        en: "Royal College of Physicians of Ireland"
      }
    },
    {
      entityid: "https://webauth.dbs.ie/idp/shibboleth",
      name: {
        en: "Dublin Business School"
      }
    },
    {
      entityid: "https://idp.gcd.ie/idp/shibboleth",
      name: {
        en: "Griffith College"
      }
    },
    {
      entityid: "https://idp.riam.ie/idp/shibboleth",
      name: {
        en: "Royal Irish Academy of Music"
      }
    },
    {
      entityid: "https://sso.umk.pl/idp/shibboleth",
      name: {
        en: "Nicolaus Copernicus University in Torun",
        pl: "Uniwersytet Mikołaja Kopernika w Toruniu"
      }
    },
    {
      entityid: "https://login.tu.kielce.pl/idp/shibboleth",
      name: {
        en: "Kielce University of Technology",
        pl: "Politechnika Świętokrzyska w Kielcach"
      }
    },
    {
      entityid: "https://idp.task.gda.pl/idp/shibboleth",
      name: {
        en: "TASK Gdansk",
        pl: "TASK Gdańsk"
      }
    },
    {
      entityid: "https://login.utp.edu.pl/idp/shibboleth",
      name: {
        en: "University of Science and Technology in Bydgoszcz",
        pl: "Uniwersytet Technologiczno-Przyrodniczy w Bydgoszczy"
      }
    },
    {
      entityid: "https://fed.p.lodz.pl/idp/shibboleth",
      name: {
        en: "Lodz University of Technology",
        pl: "Politechnika Łódzka"
      }
    },
    {
      entityid: "https://shibboleth.uni.opole.pl/idp/shibboleth",
      name: {
        en: "Opole University",
        pl: "Uniwersytet Opolski"
      }
    },
    {
      entityid: "urn:mace:incommon:osu.edu",
      name: {
        en: "Ohio State University"
      }
    },
    {
      entityid: "urn:mace:incommon:washington.edu",
      name: {
        en: "University of Washington"
      }
    },
    {
      entityid: "urn:mace:incommon:internet2.edu",
      name: {
        en: "Internet2"
      }
    },
    {
      entityid: "urn:mace:incommon:uchicago.edu",
      name: {
        en: "University of Chicago"
      }
    },
    {
      entityid: "urn:mace:incommon:stanford.edu",
      name: {
        en: "Stanford University"
      }
    },
    {
      entityid: "urn:mace:incommon:uab.edu",
      name: {
        en: "University of Alabama at Birmingham"
      }
    },
    {
      entityid: "https://shib2.its.rochester.edu/idp/shibboleth",
      name: {
        en: "University of Rochester"
      }
    },
    {
      entityid: "urn:mace:incommon:nyu.edu",
      name: {
        en: "New York University"
      }
    },
    {
      entityid: "urn:mace:incommon:dartmouth.edu",
      name: {
        en: "Dartmouth College"
      }
    },
    {
      entityid: "urn:mace:incommon:usc.edu",
      name: {
        en: "University of Southern California"
      }
    },
    {
      entityid: "urn:mace:incommon:psu.edu",
      name: {
        en: "Penn State"
      }
    },
    {
      entityid: "urn:mace:incommon:umbc.edu",
      name: {
        en: "University of Maryland Baltimore County"
      }
    },
    {
      entityid: "urn:mace:incommon:duke.edu",
      name: {
        en: "Duke University"
      }
    },
    {
      entityid: "urn:mace:incommon:stonybrook.edu",
      name: {
        en: "Stony Brook University"
      }
    },
    {
      entityid: "urn:mace:incommon:clemson.edu",
      name: {
        en: "Clemson University"
      }
    },
    {
      entityid: "urn:mace:incommon:ucdavis.edu",
      name: {
        en: "University of California, Davis"
      }
    },
    {
      entityid: "urn:mace:incommon:tamu.edu",
      name: {
        en: "Texas A & M University"
      }
    },
    {
      entityid: "urn:mace:incommon:lafayette.edu",
      name: {
        en: "Lafayette College"
      }
    },
    {
      entityid: "https://login.wisc.edu/idp/shibboleth",
      name: {
        en: "University of Wisconsin-Madison"
      }
    },
    {
      entityid: "urn:mace:incommon:columbia.edu",
      name: {
        en: "Columbia University"
      }
    },
    {
      entityid: "urn:mace:incommon:lbl.gov",
      name: {
        en: "Lawrence Berkeley National Laboratory"
      }
    },
    {
      entityid: "urn:mace:incommon:vt.edu",
      name: {
        en: "Virginia Tech"
      }
    },
    {
      entityid: "https://shibboleth.umich.edu/idp/shibboleth",
      name: {
        en: "University of Michigan"
      }
    },
    {
      entityid: "urn:mace:incommon:berkeley.edu",
      name: {
        en: "University of California, Berkeley"
      }
    },
    {
      entityid: "https://login.emory.edu/idp/shibboleth",
      name: {
        en: "Emory University"
      }
    },
    {
      entityid: "urn:mace:incommon:uiuc.edu",
      name: {
        en: "University of Illinois at Urbana-Champaign"
      }
    },
    {
      entityid: "urn:mace:incommon:carleton.edu",
      name: {
        en: "Carleton College"
      }
    },
    {
      entityid: "urn:mace:incommon:sc.edu",
      name: {
        en: "University of South Carolina"
      }
    },
    {
      entityid: "urn:mace:incommon:uiowa.edu",
      name: {
        en: "University of Iowa"
      }
    },
    {
      entityid: "https://idp2.unr.edu/idp/shibboleth",
      name: {
        en: "University of Nevada, Reno"
      }
    },
    {
      entityid: "urn:mace:incommon:mit.edu",
      name: {
        en: "Massachusetts Institute of Technology"
      }
    },
    {
      entityid: "https://shib.unl.edu/idp/shibboleth",
      name: {
        en: "University of Nebraska-Lincoln"
      }
    },
    {
      entityid: "urn:mace:incommon:ucsc.edu",
      name: {
        en: "University of California, Santa Cruz"
      }
    },
    {
      entityid: "https://idp.purdue.edu/idp/shibboleth",
      name: {
        en: "Purdue University Main Campus"
      }
    },
    {
      entityid: "https://shibidp.colostate.edu/idp/shibboleth",
      name: {
        en: "Colorado State University"
      }
    },
    {
      entityid: "https://shib-idp.umsystem.edu/idp/shibboleth",
      name: {
        en: "University of Missouri System"
      }
    },
    {
      entityid: "urn:mace:incommon:ncsu.edu",
      name: {
        en: "North Carolina State University"
      }
    },
    {
      entityid: "https://fedauth.colorado.edu/idp/shibboleth",
      name: {
        en: "University of Colorado at Boulder"
      }
    },
    {
      entityid: "https://login.ufl.edu/idp/shibboleth",
      name: {
        en: "University of Florida"
      }
    },
    {
      entityid: "urn:mace:incommon:unc.edu",
      name: {
        en: "University of North Carolina at Chapel Hill"
      }
    },
    {
      entityid: "urn:mace:incommon:nau.edu",
      name: {
        en: "Northern Arizona University"
      }
    },
    {
      entityid: "https://login.wustl.edu/idp/shibboleth",
      name: {
        en: "Washington University in St. Louis"
      }
    },
    {
      entityid: "https://idp.cpp.edu/idp/shibboleth",
      name: {
        en: "California State Polytechnic University, Pomona"
      }
    },
    {
      entityid: "urn:mace:incommon:alaska.edu",
      name: {
        en: "University of Alaska Statewide System"
      }
    },
    {
      entityid: "https://idp.csusb.edu/idp/shibboleth",
      name: {
        en: "California State University, San Bernardino"
      }
    },
    {
      entityid: "https://idp.uta.edu/idp/shibboleth",
      name: {
        en: "University of Texas at Arlington"
      }
    },
    {
      entityid: "https://login.cmu.edu/idp/shibboleth",
      name: {
        en: "Carnegie Mellon University"
      }
    },
    {
      entityid: "urn:mace:incommon:csun.edu",
      name: {
        en: "California State University, Northridge"
      }
    },
    {
      entityid: "https://shibboleth.uoregon.edu/idp/shibboleth",
      name: {
        en: "University of Oregon"
      }
    },
    {
      entityid: "https://passport.pitt.edu/idp/shibboleth",
      name: {
        en: "University of Pittsburgh"
      }
    },
    {
      entityid: "https://id.nps.edu/idp/shibboleth",
      name: {
        en: "Naval Postgraduate School"
      }
    },
    {
      entityid: "https://sso.memphis.edu/idp/shibboleth",
      name: {
        en: "The University of Memphis"
      }
    },
    {
      entityid: "https://idp.american.edu/idp/shibboleth",
      name: {
        en: "American University"
      }
    },
    {
      entityid: "https://idp.hawaii.edu/idp/shibboleth",
      name: {
        en: "University of Hawaii"
      }
    },
    {
      entityid: "https://idp.rice.edu/idp/shibboleth",
      name: {
        en: "Rice University"
      }
    },
    {
      entityid: "https://auth.yale.edu/idp/shibboleth",
      name: {
        en: "Yale University"
      }
    },
    {
      entityid: "https://idp.shibboleth.ttu.edu/idp/shibboleth",
      name: {
        en: "Texas Tech University"
      }
    },
    {
      entityid: "https://idp.smu.edu/idp/shibboleth",
      name: {
        en: "Southern Methodist University"
      }
    },
    {
      entityid: "https://idp.ias.edu/idp/shibboleth",
      name: {
        en: "Institute for Advanced Study"
      }
    },
    {
      entityid: "https://ukidp.uky.edu/idp/shibboleth",
      name: {
        en: "University of Kentucky"
      }
    },
    {
      entityid: "https://login.fandm.edu/idp/shibboleth",
      name: {
        en: "Franklin & Marshall College"
      }
    },
    {
      entityid: "https://idp.niu.edu/idp/shibboleth",
      name: {
        en: "Northern Illinois University"
      }
    },
    {
      entityid: "https://login.ligo.org/idp/shibboleth",
      name: {
        en: "LIGO Scientific Collaboration"
      }
    },
    {
      entityid: "https://idp.wmich.edu/idp/shibboleth",
      name: {
        en: "Western Michigan University"
      }
    },
    {
      entityid: "https://shibidp.syr.edu/idp/shibboleth",
      name: {
        en: "Syracuse University"
      }
    },
    {
      entityid: "https://auth.unomaha.edu/idp",
      name: {
        en: "University of Nebraska at Omaha"
      }
    },
    {
      entityid: "https://idp.osc.edu/auth/realms/osc",
      name: {
        en: "Ohio Supercomputer Center (OSC)"
      }
    },
    {
      entityid: "https://idp.bnl.gov/idp/shibboleth",
      name: {
        en: "Brookhaven National Laboratory"
      }
    },
    {
      entityid: "https://sso.ewu.edu/idp/shibboleth",
      name: {
        en: "Eastern Washington University"
      }
    },
    {
      entityid: "https://fed.huit.harvard.edu/idp/shibboleth",
      name: {
        en: "Harvard University"
      }
    },
    {
      entityid: "https://jidp.jlab.org/idp/shibboleth",
      name: {
        en: "Thomas Jefferson National Accelerator Facility"
      }
    },
    {
      entityid: "https://webauth.auburn.edu/idp/shibboleth",
      name: {
        en: "Auburn University"
      }
    },
    {
      entityid: "https://shib.bucknell.edu/idp/shibboleth",
      name: {
        en: "Bucknell University"
      }
    },
    {
      entityid: "https://auth.unk.edu/idp/shibboleth",
      name: {
        en: "University of Nebraska At Kearney"
      }
    },
    {
      entityid: "https://shib.sou.edu/idp/shibboleth",
      name: {
        en: "Southern Oregon University"
      }
    },
    {
      entityid: "https://sso.pdx.edu/idp/shibboleth",
      name: {
        en: "Portland State University"
      }
    },
    {
      entityid: "https://neuidmsso.neu.edu/idp/shibboleth",
      name: {
        en: "Northeastern University"
      }
    },
    {
      entityid: "https://idp.unmc.edu/idp/shibboleth",
      name: {
        en: "University of Nebraska Medical Center"
      }
    },
    {
      entityid: "https://login.oregonstate.edu/idp/shibboleth",
      name: {
        en: "Oregon State University"
      }
    },
    {
      entityid: "https://idp.ndsu.edu/idp/shibboleth",
      name: {
        en: "North Dakota State University"
      }
    },
    {
      entityid: "https://idp.xsede.org/idp/shibboleth",
      name: {
        en: "XSEDE"
      }
    },
    {
      entityid: "https://idp.cc.binghamton.edu/idp/shibboleth",
      name: {
        en: "Binghamton University"
      }
    },
    {
      entityid: "https://idp.mines.edu/idp/shibboleth",
      name: {
        en: "Colorado School of Mines"
      }
    },
    {
      entityid: "https://idp.cirrusidentity.com/idp",
      name: {
        en: "Cirrus Identity, Inc."
      }
    },
    {
      entityid: "https://shibidp.bates.edu/idp/shibboleth",
      name: {
        en: "Bates College"
      }
    },
    {
      entityid: "https://webauth.uncc.edu/idp/shibboleth",
      name: {
        en: "University of North Carolina At Charlotte"
      }
    },
    {
      entityid: "https://shibboleth.uwyo.edu/idp/shibboleth",
      name: {
        en: "University of Wyoming"
      }
    },
    {
      entityid: "https://rushib.rockefeller.edu/idp/shibboleth",
      name: {
        en: "Rockefeller University"
      }
    },
    {
      entityid: "https://passport.ucdenver.edu/oam/fed",
      name: {
        en: "University of Colorado Denver | Anschutz Medical Campus"
      }
    },
    {
      entityid: "https://shfed.augusta.edu/idp/shibboleth",
      name: {
        en: "Augusta University"
      }
    },
    {
      entityid: "https://shib.mcw.edu/idp/shibboleth",
      name: {
        en: "Medical College of Wisconsin"
      }
    },
    {
      entityid: "https://shib.uvu.edu/idp/shibboleth",
      name: {
        en: "Utah Valley University"
      }
    },
    {
      entityid: "https://idp.haverford.edu/idp/shibboleth",
      name: {
        en: "Haverford College"
      }
    },
    {
      entityid: "https://cumin.plu.edu/idp/shibboleth",
      name: {
        en: "Pacific Lutheran University"
      }
    },
    {
      entityid: "https://login.brockport.edu",
      name: {
        en: "SUNY The College at Brockport (New)"
      }
    },
    {
      entityid: "https://idp.uwf.edu/idp/shibboleth",
      name: {
        en: "University of West Florida"
      }
    },
    {
      entityid: "https://login.icermali.org/idp/shibboleth",
      name: {
        en: "ICER - Mali"
      }
    },
    {
      entityid: "https://login.iceruganda.org/idp/shibboleth",
      name: {
        en: "ICER - Uganda"
      }
    },
    {
      entityid: "https://passport-dev.pitt.edu/idp/shibboleth",
      name: {
        en: "zTest - University of Pittsburgh Test IdP"
      }
    },
    {
      entityid: "https://ssoportal.stsci.edu/idp/shibboleth",
      name: {
        en: "Space Telescope Science Institute"
      }
    },
    {
      entityid: "https://idp.ncsa.illinois.edu/idp/shibboleth",
      name: {
        en: "National Center for Supercomputing Applications"
      }
    },
    {
      entityid: "http://adfs.amnh.org/adfs/services/trust",
      name: {
        en: "American Museum of Natural History - Richard Gilder Graduate School"
      }
    },
    {
      entityid: "https://identity.colgate.edu/idp/shibboleth",
      name: {
        en: "Colgate University"
      }
    },
    {
      entityid: "https://sso.vai.org/idp",
      name: {
        en: "Van Andel Research Institute"
      }
    },
    {
      entityid: "https://idp.duq.edu/idp/shibboleth",
      name: {
        en: "Duquesne University"
      }
    },
    {
      entityid: "https://login.nyumc.org/idp/shibboleth",
      name: {
        en: "NYU Langone Health"
      }
    },
    {
      entityid: "https://shibboleth.uog.edu/idp/shibboleth",
      name: {
        en: "University of Guam"
      }
    },
    {
      entityid: "https://login.ktu.lt/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Kaunas University of Technology",
        lt: "Kauno technologijos universitetas"
      }
    },
    {
      entityid: "https://id.viko.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "Vilnius University of Applied Sciences",
        lt: "Vilniaus kolegija"
      }
    },
    {
      entityid: "https://lsu.sso.litnet.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "Lithuanian Sports University",
        lt: "Lietuvos sporto universitetas"
      }
    },
    {
      entityid: "https://ism.sso.litnet.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "ISM University of Management and Economics",
        lt: "ISM Vadybos ir ekonomikos universitetas"
      }
    },
    {
      entityid: "https://vdu.sso.litnet.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "Vytautas Magnus University",
        lt: "Vytauto Didžiojo universitetas"
      }
    },
    {
      entityid: "https://login.kvk.lt/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Klaipeda State University of Applied Sciences",
        lt: "Klaipėdos valstybinė kolegija"
      }
    },
    {
      entityid: "https://fedi.ku.lt/idp/shibboleth",
      name: {
        en: "Klaipeda University",
        lt: "Klaipėdos universitetas"
      }
    },
    {
      entityid: "https://login.mruni.eu/sso/saml2/idp/metadata.php",
      name: {
        lt: "Mykolo Romerio universitetas",
        en: "Mykolas Romeris University"
      }
    },
    {
      entityid: "https://lsmu.sso.litnet.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "Lithuanian University of Health Sciences",
        lt: "Lietuvos sveikatos mokslų universitetas"
      }
    },
    {
      entityid: "https://marko.sso.litnet.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "Marijampole College",
        lt: "Marijampolės kolegija"
      }
    },
    {
      entityid: "https://ak.sso.litnet.lt/auth/saml2/idp/metadata.php",
      name: {
        en: "Alytus University of Applied Sciences",
        lt: "Alytaus kolegija"
      }
    },
    {
      entityid: "https://iif.iucc.ac.il/idp/saml2/idp/metadata.php",
      name: {
        en: "Inter university Computation Center(IUCC)"
      }
    },
    {
      entityid: "https://auth.ut.ee/idp/saml2/idp/metadata.php",
      name: {
        en: "University of Tartu",
        et: "Tartu Ülikool"
      }
    },
    {
      entityid: "https://passwd.tlu.ee/taatauth/saml2/idp/metadata.php",
      name: {
        en: "Tallinn University",
        et: "Tallinna Ülikool"
      }
    },
    {
      entityid: "https://eenet.harid.ee/sso/saml2/idp/metadata.php",
      name: {
        en: "EENet SSO",
        et: "EENet SSO"
      }
    },
    {
      entityid: "https://idp.fccn.pt/idp/shibboleth",
      name: {
        en: "FCT|FCCN",
        pt: "FCT|FCCN"
      }
    },
    {
      entityid: "https://idp.esenf.pt/idp/shibboleth",
      name: {
        en: "Escola Superior de Enfermagem do Porto",
        pt: "Escola Superior de Enfermagem do Porto"
      }
    },
    {
      entityid: "https://idp.enautica.pt/idp/shibboleth",
      name: {
        en: "Escola Náutica Infante Dom Henrique",
        pt: "Escola Náutica Infante Dom Henrique"
      }
    },
    {
      entityid: "https://idp.esav.ipv.pt/idp/shibboleth",
      name: {
        en: "Escola Superior Agrária de Viseu",
        pt: "Escola Superior Agrária de Viseu"
      }
    },
    {
      entityid: "https://idp.esev.ipv.pt/idp/shibboleth",
      name: {
        en: "Escola Superior de Educação de Viseu",
        pt: "Escola Superior de Educação de Viseu"
      }
    },
    {
      entityid: "https://idpesenfc.esenfc.pt/idp/shibboleth",
      name: {
        en: "Nursing School of Coimbra",
        pt: "Escola Superior de Enfermagem de Coimbra"
      }
    },
    {
      entityid: "https://idp.essv.ipv.pt/idp/shibboleth",
      name: {
        en: "Escola Superior de Saude de Viseu",
        pt: "Escola Superior de Saude de Viseu"
      }
    },
    {
      entityid: "https://idp.estgl.ipv.pt/idp/shibboleth",
      name: {
        en: "Escola Superior de Tecnologia e Gestão de Lamego",
        pt: "Escola Superior de Tecnologia e Gestão de Lamego"
      }
    },
    {
      entityid: "https://idp.estgv.ipv.pt/idp/shibboleth",
      name: {
        en: "Escola Superior de Tecnologia e Gestão de Viseu",
        pt: "Escola Superior de Tecnologia e Gestão de Viseu"
      }
    },
    {
      entityid: "https://idp.ipportalegre.pt/idp/shibboleth",
      name: {
        en: "Instituto Politecnico de Portalegre",
        pt: "Instituto Politecnico de Portalegre"
      }
    },
    {
      entityid: "https://idp.net.ipl.pt/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Instituto Politécnico de Lisboa",
        pt: "Instituto Politécnico de Lisboa"
      }
    },
    {
      entityid: "https://idp01.net.ipp.pt/idp/shibboleth",
      name: {
        en: "Polytechnic Institute of Porto",
        pt: "Instituto Politécnico do Porto"
      }
    },
    {
      entityid: "https://idp.iscte-iul.pt/idp/shibboleth",
      name: {
        en: "ISCTE - Instituto Universitario de Lisboa",
        pt: "ISCTE - Instituto Universitario de Lisboa"
      }
    },
    {
      entityid: "https://idp.lip.pt/idp/shibboleth",
      name: {
        pt: "Laboratório de Instrumentação e Física Experimental de Partículas",
        en: "Laboratório de Instrumentação e Física Experimental de Partículas"
      }
    },
    {
      entityid: "https://idp.pres.ipv.pt/idp/shibboleth",
      name: {
        en: "Instituto Politécnico de Viseu",
        pt: "Polytechnic Institute of Viseu"
      }
    },
    {
      entityid: "https://idp.sec-geral.mec.pt/idp/shibboleth",
      name: {
        en: "Secretaria Geral da Educação e Ciência",
        pt: "Secretaria Geral da Educação e Ciência"
      }
    },
    {
      entityid: "https://idprovider.uab.pt/idp/shibboleth",
      name: {
        en: "Universidade Aberta",
        pt: "Universidade Aberta"
      }
    },
    {
      entityid: "https://id.tecnico.ulisboa.pt/saml",
      name: {
        en: "ULisboa - Instituto Superior Técnico",
        pt: "ULisboa - Instituto Superior Técnico"
      }
    },
    {
      entityid: "https://idp.ubi.pt/idp/shibboleth",
      name: {
        en: "University of Beira Interior",
        pt: "Universidade da Beira Interior"
      }
    },
    {
      entityid: "https://idp.ua.pt/idp/shibboleth",
      name: {
        en: "University of Aveiro",
        pt: "Universidade de Aveiro"
      }
    },
    {
      entityid: "https://idp.utad.pt/idp/shibboleth",
      name: {
        en: "Universidade de Trás os Montes e Alto Douro",
        pt: "Universidade de Trás os Montes e Alto Douro"
      }
    },
    {
      entityid: "https://aai.uevora.pt/idp/shibboleth",
      name: {
        en: "University of Évora",
        pt: "Universidade de Évora"
      }
    },
    {
      entityid: "https://si-saai.ualg.pt/idp/shibboleth",
      name: {
        en: "University of Algarve",
        pt: "Universidade do Algarve"
      }
    },
    {
      entityid: "https://idp.uminho.pt/idp/shibboleth",
      name: {
        en: "University of Minho",
        pt: "Universidade do Minho"
      }
    },
    {
      entityid: "https://wayf.up.pt/idp/shibboleth",
      name: {
        en: "University of Porto",
        pt: "Universidade do Porto"
      }
    },
    {
      entityid: "https://idp.fcsh.unl.pt/idp/shibboleth",
      name: {
        en: "UNL - Faculdade de Ciências Sociais e Humanas",
        pt: "UNL - Faculdade de Ciências Sociais e Humanas"
      }
    },
    {
      entityid: "https://idp2.anu.edu.au/idp/shibboleth",
      name: {
        en: "Australian National University"
      }
    },
    {
      entityid: "https://idpp1.curtin.edu.au/idp/shibboleth",
      name: {
        en: "Curtin University"
      }
    },
    {
      entityid: "https://signon.deakin.edu.au/idp/shibboleth",
      name: {
        en: "Deakin University"
      }
    },
    {
      entityid: "https://idp.flinders.edu.au/idp/shibboleth",
      name: {
        en: "Flinders University"
      }
    },
    {
      entityid: "https://idp.murdoch.edu.au/idp/shibboleth",
      name: {
        en: "Murdoch University"
      }
    },
    {
      entityid: "https://idp.newcastle.edu.au/idp/shibboleth",
      name: {
        en: "University of Newcastle"
      }
    },
    {
      entityid: "https://federation.sydney.edu.au/idp/shibboleth",
      name: {
        en: "The University of Sydney"
      }
    },
    {
      entityid: "https://idp.unimelb.edu.au/idp/shibboleth",
      name: {
        en: "The University of Melbourne"
      }
    },
    {
      entityid: "https://unisa.edu.au/idp/shibboleth",
      name: {
        en: "University of South Australia"
      }
    },
    {
      entityid: "urn:mace:federation.org.au:testfed:uq.edu.au",
      name: {
        en: "The University of Queensland"
      }
    },
    {
      entityid: "https://aaf1-idp.its.utas.edu.au/idp/shibboleth",
      name: {
        en: "University of Tasmania"
      }
    },
    {
      entityid: "https://idp.uwa.edu.au/idp/shibboleth",
      name: {
        en: "The University of Western Australia"
      }
    },
    {
      entityid: "https://vho.aaf.edu.au/idp/shibboleth",
      name: {
        en: "AAF Virtual Home"
      }
    },
    {
      entityid: "https://idpweb1.vu.edu.au/idp/shibboleth",
      name: {
        en: "Victoria University"
      }
    },
    {
      entityid: "https://idp.cc.swin.edu.au/idp/shibboleth",
      name: {
        en: "Swinburne University of Technology"
      }
    },
    {
      entityid: "urn:mace:federation.org.au:testfed:mq.edu.au",
      name: {
        en: "Macquarie University"
      }
    },
    {
      entityid: "https://coreen-idp.kreonet.net/idp/simplesamlphp",
      name: {
        en: "COREEN set.ID by KAFE"
      }
    },
    {
      entityid: "https://idpass.postech.ac.kr/idp/simplesamlphp",
      name: {
        en: "Pohang University of Science and Technology"
      }
    },
    {
      entityid: "https://iam.kisti.re.kr/idp/simplesamlphp",
      name: {
        en: "Korea Institute of Science and Technology Information"
      }
    },
    {
      entityid: "https://kafegw.snu.ac.kr/idp/simplesamlphp",
      name: {
        en: "Seoul National University"
      }
    },
    {
      entityid: "https://kafe.kasi.re.kr/idp/simplesamlphp",
      name: {
        en: "Korea Astronomy and Space Science Institute"
      }
    },
    {
      entityid: "https://iam.kiom.re.kr/idp/simplesamlphp",
      name: {
        en: "Korea Institute of Oriental Medicine"
      }
    },
    {
      entityid: "https://share-sso.korea.ac.kr/sso",
      name: {
        en: "Korea University"
      }
    },
    {
      entityid: "http://proxy.safire.ac.za/birk.php/federation.ukzn.ac.za/adfs/services/trust",
      name: {
        en: "University of KwaZulu-Natal",
        zu: "inYuvesi yaKwaZulu-Natali",
        af: "Universiteit van KwaZulu-Natal"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/sso.sats.edu.za/",
      name: {
        en: "South African Theological Seminary",
        af: "Suid-Afrikaanse Teologiese Seminarium",
        fr: "Séminaire Théologique Sud-Africain",
        pt: "Seminário Teológico Sul Africano",
        xh: "ISouth African Theological Seminary",
        es: "Seminario Teologico Sudafricano"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/www1.up.ac.za:443/oam/fed",
      name: {
        en: "University of Pretoria",
        af: "Universiteit van Pretoria"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/srvslsfed001.uct.ac.za/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "University of Cape Town",
        af: "Universiteit Kaapstad",
        xh: "IYunivesithi yaseKapa"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/idp.wsu.ac.za/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Walter Sisulu University",
        af: "Walter Sisulu Universiteit"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/login.ru.ac.za/idp/shibboleth",
      name: {
        en: "Rhodes University",
        xh: "IYunivesiti iRhodes",
        af: "Rhodes-universiteit"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/googleidp.sanren.ac.za/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "SANReN Competency Area"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/wwwqa.up.ac.za:443/oam/fed",
      name: {
        en: "University of Pretoria TEST",
        af: "Universiteit van Pretoria TEST",
        nso: "Yunibesithi ya Pretoria TEST"
      }
    },
    {
      entityid: "http://proxy.safire.ac.za/birk.php/federate.sun.ac.za/adfs/services/trust",
      name: {
        en: "Stellenbosch University",
        xh: "iYunivesithi Stellenbosch",
        af: "Universiteit Stellenbosch"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/idp-01.tenet.ac.za/idp/shibboleth",
      name: {
        en: "TENET South Africa",
        af: "TENET Suid-Afrika"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/shib.nwu.ac.za/idp/shibboleth",
      name: {
        en: "North-West University",
        tn: "Yunibesiti Ya Bokone-Bophirima",
        af: "Noordwes Universiteit"
      }
    },
    {
      entityid: "http://proxy.safire.ac.za/birk.php/logon.cut.ac.za/adfs/services/trust",
      name: {
        en: "Central University of Technology, Free State"
      }
    },
    {
      entityid: "https://proxy.safire.ac.za/birk.php/nmmusaml-sc1.nmmu.ac.za/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Nelson Mandela University (NMMU)"
      }
    },
    {
      entityid: "https://idp.grid.arn.dz/idp/shibboleth",
      name: {
        en: "DZ e-Science GRID IDP"
      }
    },
    {
      entityid: "https://med-idp.arn.dz/idp/shibboleth",
      name: {
        en: "DZ e-Science MEDECINE IDP"
      }
    },
    {
      entityid: "https://vho.sgaf.singaren.net.sg/idp/shibboleth",
      name: {
        en: "SingAREN"
      }
    },
    {
      entityid: "https://sgaf.singaren.net.sg/simplesaml/saml2/idp/metadata.php",
      name: {
        en: "Singapore Institutions"
      }
    },
    {
      entityid: "https://hkafidp.hku.hk/idp/shibboleth",
      name: {
        en: "The University of Hong Kong"
      }
    },
    {
      entityid: "https://sso.perdanauniversity.edu.my/saml2/idp/metadata.php",
      name: {
        en: "Perdana University"
      }
    },
    {
      entityid: "https://idp.ump.edu.my/sso/saml2/idp/metadata.php",
      name: {
        en: "Universiti Malaysia Pahang"
      }
    },
    {
      entityid: "https://idp3.umt.edu.my/idp/shibboleth",
      name: {
        en: "Universiti Malaysia Terengganu"
      }
    },
    {
      entityid: "https://sso.myren.net.my/idp/shibboleth",
      name: {
        en: "Malaysian Research and Education Network (MYREN)"
      }
    },
    {
      entityid: "https://idp.imu.edu.my/idp/shibboleth",
      name: {
        en: "International Medical University"
      }
    },
    {
      entityid: "https://idp.fedurus.ru/idp/shibboleth",
      name: {
        en: "FEDURUS",
        ru: "ФЕДУРУС"
      }
    },
    {
      entityid: "https://idp.spbu.ru/idp/shibboleth",
      name: {
        en: "Saint-Petersburg State University",
        ru: "Санкт-Петербургский государственный университет"
      }
    },
    {
      entityid: "https://libidp.pstu.ru/idp/shibboleth",
      name: {
        en: "Perm National Research Polytechnic University",
        ru: "Пермский национальный исследовательский политехнический университет"
      }
    },
    {
      entityid: "https://idp.library.spbstu.ru/idp/shibboleth",
      name: {
        en: "Peter the Great Saint-Petersburg Polytechnic University",
        ru: "Санкт-Петербургский политехнический университет Петра Великого"
      }
    },
    {
      entityid: "https://shib.kpfu.ru/idp/shibboleth",
      name: {
        en: "Kazan Federal University",
        ru: "Казанский федеральный университет"
      }
    },
    {
      entityid: "https://idp.utmn.ru/idp/shibboleth",
      name: {
        en: "Tyumen State University",
        ru: "Тюменский государственный университет"
      }
    },
    {
      entityid: "https://services.ifmo.ru/idp/shibboleth",
      name: {
        en: "ITMO University",
        ru: "Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики"
      }
    },
    {
      entityid: "https://idp.ufa-rb.ru/idp/shibboleth",
      name: {
        en: "Ufa State Aviation Technical University",
        ru: "Уфимский государственный авиационный технический университет"
      }
    },
    {
      entityid: "https://idp.bashedu.ru/idp/shibboleth",
      name: {
        en: "Bashkir State University",
        ru: "Башкирский государственный университет"
      }
    },
    {
      entityid: "https://idp.lib.sfedu.ru/idp/shibboleth",
      name: {
        en: "Southern Federal University",
        ru: "Южный федеральный университет"
      }
    },
    {
      entityid: "https://idp.zamren.zm/simplesamlphp/saml2/idp/metadata.php",
      name: {
        en: "Zamren"
      }
    },
    {
      entityid: "http://fs.su.edu.om/adfs/services/trust",
      name: {
        en: "Sohar University"
      }
    },
    {
      entityid: "http://fs.css.edu.om/adfs/services/trust",
      name: {
        en: "College of Shari'a Sciences"
      }
    },
    {
      entityid: "http://adfs.mcbs.edu.om/adfs/services/trust",
      name: {
        en: "Modern College of Business and Science"
      }
    },
    {
      entityid: "http://ADFS.mtc.edu.om/adfs/services/trust",
      name: {
        en: "Military Technological College"
      }
    },
    {
      entityid: "http://adfs.suc.edu.om/adfs/services/trust",
      name: {
        en: "Sur University College"
      }
    },
    {
      entityid: "http://fs.trc.gov.om/adfs/services/trust",
      name: {
        en: "The Research Council"
      }
    },
    {
      entityid: "http://adfs.imco.edu.om/adfs/services/trust",
      name: {
        en: "International Maritime College Oman"
      }
    },
    {
      entityid: "http://adfs.asu.edu.om/adfs/services/trust",
      name: {
        en: "A’Sharqiyah University"
      }
    },
    {
      entityid: "https://shib.euc.ac.cy/idp/shibboleth",
      name: {
        en: "European University Cyprus",
        el: "Ευρωπαϊκό Πανεπιστήμιο Κύπρου"
      }
    },
    {
      entityid: "https://idp.cmb.ac.lk/idp/shibboleth",
      name: {
        en: "University of Colombo"
      }
    },
    {
      entityid: "https://idp.pdn.ac.lk/idp/shibboleth",
      name: {
        en: "University of Peradeniya"
      }
    },
    {
      entityid: "https://idp.kln.ac.lk/idp/shibboleth",
      name: {
        en: "University of Kelaniya - Sri Lanka"
      }
    },
    {
      entityid: "https://idp.seu.ac.lk/idp/shibboleth",
      name: {
        en: "South Eastern University of Sri Lanka"
      }
    },
    {
      entityid: "https://idp.ucsc.cmb.ac.lk/idp/shibboleth",
      name: {
        en: "University of Colombo School of Computing"
      }
    },
    {
      entityid: "https://iam.vpa.ac.lk/idp/shibboleth",
      name: {
        en: "University of the Visual and Performing Arts"
      }
    },
    {
      entityid: "https://idp.sjp.ac.lk/idp/shibboleth",
      name: {
        en: "University of Sri Jayewardenepura"
      }
    },
    {
      entityid: "https://idp.medicine.kln.ac.lk/idp/shibboleth",
      name: {
        en: "Faculty of Medicine, University of Kelaniya, Sri Lanka"
      }
    },
    {
      entityid: "https://idp.learn.ac.lk/idp/shibboleth",
      name: {
        en: "LEARN - Sri Lanka"
      }
    },
    {
      entityid: "https://idp.iti.lk/idp/shibboleth",
      name: {
        en: "Industrial Technology Institute - Sri Lanka"
      }
    },
    {
      entityid: "https://idp.uom.lk/idp/shibboleth",
      name: {
        en: "University of Moratuwa"
      }
    },
    {
      entityid: "https://idp.uwu.ac.lk/idp/shibboleth",
      name: {
        en: "Uva Wellassa University"
      }
    },
    {
      entityid: "https://idp.ugc.ac.lk/idp/shibboleth",
      name: {
        en: "University Grants Commission - Sri Lanka"
      }
    },
    {
      entityid: "https://idp.tec.ruh.ac.lk/idp/shibboleth",
      name: {
        en: "Faculty of Technology, University of Ruhuna, Sri Lanka"
      }
    },
    {
      entityid: "https://idp.ruh.ac.lk/idp/shibboleth",
      name: {
        en: "University of Ruhuna"
      }
    },
    {
      entityid: "https://login.cesnet.cz/google-idp/",
      name: {
        en: "CESNET - Google gateway IdP"
      }
    },
    {
      entityid: "https://login.cesnet.cz/facebook-idp/",
      name: {
        en: "CESNET - Facebook gateway IdP"
      }
    },
    {
      entityid: "https://login.cesnet.cz/orcid-idp/",
      name: {
        en: "CESNET - ORCID gateway IdP"
      }
    },
    {
      entityid: "https://login.cesnet.cz/linkedin-idp/",
      name: {
        en: "CESNET - LinkedIn gateway IdP"
      }
    },
    {
      entityid: "https://login.cesnet.cz/github-idp/",
      name: {
        en: "CESNET - Github gateway IdP"
      }
    },
    {
      entityid: "https://login.ics.muni.cz/idp/shibboleth",
      name: {
        en: "MetaCentrum IdP"
      }
    }
  ];

  datasource: MatTableDataSource<Entity>;
  loading = true;
  filterInputControl = new FormControl();

  @Output()
  federationSelect: EventEmitter<Entity> = new EventEmitter<Entity>();

  customFilter = (entity, filter) => {
    const filterValue = filter.trim().toLowerCase();
    if (entity.entityid.toLowerCase().indexOf(filterValue) > -1) {
      return true;
    }
    const names = Object.values(entity.name);
    for (const name of names) {
      if (name.toString().toLowerCase().indexOf(filterValue) > -1) {
        return true;
      }
    }
    return false;
  };

  ngOnInit() {
    this.entitiesService.loadEntities().subscribe(entities => {
      this.entities = entities;
      this.loading = false;
      this.setDataSource();
    },() => {
      this.loading = false;
      this.setDataSource();
    });

    this.filterInputControl.valueChanges.subscribe(newValue => this.filterEntities(newValue))
  }

  setDataSource(): void {
    this.datasource = new MatTableDataSource<Entity>(this.entities);
    this.datasource.filterPredicate = this.customFilter;
  }

  filterEntities(value: string): void {
    this.datasource.filter = value;
  }
}

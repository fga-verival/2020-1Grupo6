package tst;

 import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import app.CDB;
import app.CDBImpostos;

 public class CDBImpostosTest {

	private CDB cdb;
	 
 	@Before
 	public void setUp() throws Exception {
 		cdb = new CDB();
 	}

 	@Test
 	public void testCalcularImpostoDeRenda() {
 		cdb.cadastrarValorInicial(1000f);
		cdb.cadastrarTaxaJuros(8.5);
		cdb.cadastrarQtdDias(60);
		
		CDBImpostos cdbImpostos = new CDBImpostos();
		cdbImpostos.cadastrarCDB(cdb);
		
		assertEquals(3.14, cdbImpostos.calcularImpostos(), 0.05);
 	}
 	
	@Test
 	public void testCalcularImpostoDeRenda1() {
 		cdb.cadastrarValorInicial(500f);
		cdb.cadastrarTaxaJuros(8.0);
		cdb.cadastrarQtdDias(120);
		
		CDBImpostos cdbImpostos = new CDBImpostos();
		cdbImpostos.cadastrarCDB(cdb);
		
		assertEquals(2.96, cdbImpostos.calcularImpostos(), 0.05);
 	}
	
	@Test
 	public void testCalcularImpostoDeRenda2() {
 		cdb.cadastrarValorInicial(100f);
		cdb.cadastrarTaxaJuros(7.5);
		cdb.cadastrarQtdDias(390);
		
		CDBImpostos cdbImpostos = new CDBImpostos();
		cdbImpostos.cadastrarCDB(cdb);
		
		assertEquals(1.40, cdbImpostos.calcularImpostos(), 0.05);
 	}
	
	@Test
 	public void testCalcularImpostoDeRenda3() {
 		cdb.cadastrarValorInicial(3000f);
		cdb.cadastrarTaxaJuros(9.0);
		cdb.cadastrarQtdDias(240);
		
		CDBImpostos cdbImpostos = new CDBImpostos();
		cdbImpostos.cadastrarCDB(cdb);
		
		assertEquals(35.51, cdbImpostos.calcularImpostos(), 0.05);
 	}
	
	@Test
 	public void testCalcularImpostoDeRenda4() {
 		cdb.cadastrarValorInicial(4200f);
		cdb.cadastrarTaxaJuros(9.5);
		cdb.cadastrarQtdDias(900);
		
		CDBImpostos cdbImpostos = new CDBImpostos();
		cdbImpostos.cadastrarCDB(cdb);
		
		assertEquals(147.58, cdbImpostos.calcularImpostos(), 0.05);
 	}

	@Test
 	public void testCalcularImpostoDeRend5() {
		// Para casos mais complexos, é interessante criar pastas de mocks, spys, e drivers
		CDB cdb1 = new CDB();
		cdb1.cadastrarValorInicial(1000f);
		cdb1.cadastrarTaxaJuros(8.5);
		cdb1.cadastrarQtdDias(60);
		
		CDBImpostos cdbImpostos1 = new CDBImpostos();
		cdbImpostos1.cadastrarCDB(cdb1);
		
		CDB cdb2 = new CDB();
		cdb2.cadastrarValorInicial(500f);
		cdb2.cadastrarTaxaJuros(8.0);
		cdb2.cadastrarQtdDias(120);
		
		CDBImpostos cdbImpostos2 = new CDBImpostos();
		cdbImpostos2.cadastrarCDB(cdb2);
		
		assertEquals(6.1, cdbImpostos1.calcularImpostos() + cdbImpostos2.calcularImpostos(), 0.05);
 	}
 }
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
		
		assertEquals(3.14, cdbImpostos.calcularImpostos(), 0.05);
 	}
 	
	@Test
 	public void testCalcularImpostoDeRenda1() {
 		cdb.cadastrarValorInicial(500f);
		cdb.cadastrarTaxaJuros(8.0);
		cdb.cadastrarQtdDias(120);
		
		CDBImpostos cdbImpostos = new CDBImpostos();
		
		assertEquals(2.96, cdbImpostos.calcularImpostos(), 0.05);
 	}
 }
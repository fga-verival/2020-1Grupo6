package tst;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import app.CDB;

public class CDBTest {

	private CDB cdb;

	@Before
	public void setUp() throws Exception {
		cdb = new CDB();
	}

	@Test
	public void testCalcularRendimentoBruto() {
		cdb.cadastrarValorInicial(1000f);
		cdb.cadastrarTaxaJuros(8.5);
		cdb.cadastrarQtdDias(60);
		
		assertEquals(13.97, cdb.getRendimentoBruto(), 0.1);
	}
	
	@Test
	public void testCalcularRendimentoBruto2() {
		cdb.cadastrarValorInicial(500f);
		cdb.cadastrarTaxaJuros(8.0);
		cdb.cadastrarQtdDias(120);
		
		assertEquals(13.15, cdb.getRendimentoBruto(), 0.1);
	}
}

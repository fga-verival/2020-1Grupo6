package tst;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import app.CDB;

public class CDBTest {

	@Test
	public void testCalcularRendimentoBruto() {
		CDB cdb = new CDB();
		
		cdb.cadastrarValorInicial(1000f);
		cdb.cadastrarTaxaJuros(8.5);
		cdb.cadastrarQtdDias(60);
		assertEquals(13.97, cdb.getRendimentoBruto(), 0.05);
	}
	
	@Test
	public void testCalcularRendimentoBruto2() {
		CDB cdb = new CDB();
		
		cdb.cadastrarValorInicial(500f);
		cdb.cadastrarTaxaJuros(8.0);
		cdb.cadastrarQtdDias(120);
		
		assertEquals(13.15, cdb.getRendimentoBruto(), 0.05);
	}
	
	@Test
	public void testCalcularRendimentoBruto3() {
		CDB cdb1 = new CDB();
		cdb1.cadastrarValorInicial(1000f);
		cdb1.cadastrarTaxaJuros(8.5);
		cdb1.cadastrarQtdDias(60);
		
		CDB cdb2 = new CDB();
		cdb2.cadastrarValorInicial(500f);
		cdb2.cadastrarTaxaJuros(8.0);
		cdb2.cadastrarQtdDias(120);
		
		double rendimentoBruto1 = cdb1.getRendimentoBruto();
		double rendimentoBruto2 = cdb2.getRendimentoBruto();
		
		assertEquals(27.12, rendimentoBruto1 + rendimentoBruto2, 0.05);
	}
}

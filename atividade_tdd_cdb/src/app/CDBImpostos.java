package app;

public class CDBImpostos {

	private CDB cdb;

	public void cadastrarCDB(CDB cdb) {
		this.cdb = cdb;
	}
	
	public double calcularImpostos() {
		int qtdDias = cdb.getQtdDias();
		double rendimentoBruto = cdb.getRendimentoBruto();
		
		if(qtdDias <= 180) {
			return rendimentoBruto * (22.5/100.0);
		} else if (qtdDias <= 360) {
			return rendimentoBruto * (20/100.0);
		} else if (qtdDias <= 720) {
			return rendimentoBruto * (17.5/100.0);
		} else {
			return rendimentoBruto * (15.0/100.0);
		}
	}
}

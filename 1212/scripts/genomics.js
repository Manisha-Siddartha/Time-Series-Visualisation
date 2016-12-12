
var studyIds = ["sclc_clcgp","ucs_tcga","ov_tcga_pub","hnsc_tcga_pub","cellline_ccle_broad","stad_tcga","lihc_tcga","prad_tcga","prad_tcga","acc_tcga"];
var profileIds = ["_mutations"];
var profileDefaultProperty = ["# DATA_TYPE	 Mutations","# DATA_TYPE	Putative copy-number alterations from GISTIC"];
var studyNames = ["Small Cell Lung Cancer","Uterine Carcinosarcoma","Ovarian Serous","Head and Neck Squamous Cell Carcinoma","Cancer Cell Line Encyclopedia","Stomach Adenocarcinoma","Liver Hepatocellular Carcinoma","Prostate Adenocarcinoma","Pancreatic Adenocarcinoma","Adrenocortical Carcinoma"];	
var gene_list= ["MUC4","TP53","CSMD3","LRP1B","RYR2","HRNR","ZFHX4","OBSCN","FLG","FLNC"];

var cBioPortalData1={};
var data = [];
var i=0;


function loaddata(){
	cBioPortalData1={};
	dataset=[];
	for(var j=0;j<10;j++){
		i=j;
		getData(gene_list[j]);
	}
}

function getData(geneName){

    //var geneName=gene_list[i];
	console.log("getGenomics geneName= "+geneName);
  	
  	cBioPortalData1[geneName] = new Object();
	cBioPortalData1[geneName][0]=new Object();
  	var p=0;
  	if (geneName=="")  
		updateNodeColors(); 
  	else{
  				 		
			for (var i=0;i<10;i++){  
				var strServer = "//www.cbioportal.org/webservice.do?";	
				// Profile blca_tcga_pub_gistic  blca_tcga_pub_mutations
				var study = studyIds[i];
				var profile = profileIds[p];
				var request = "cmd=getProfileData&case_set_id="+study+"_all&genetic_profile_id="+study+profile+"&gene_list="+geneName;
				//console.log(request); 
				var str2 = strServer+request;
				(function(request,i,p) { 	
					d3.csv(str2, function(error, json) {
					 	if (error) {
							console.warn("warn: "+error);
						//	updateNodeColors();
							return;
						}	
					})
					.get()
					.on('load', function(d) { 
					 	//console.log(d); 

    						
 						
					 	var count=0;
					 	if (d.length>0){
					 		var propertyName = profileDefaultProperty[p];
					 		//console.log("1_"+propertyName); 
					 		for (key in d[2]) {
					 			if (key.indexOf("# DATA_TYPE")>-1)
					 				propertyName = key;
					 			else if (key.indexOf("Unknown gene")>-1){
					 				propertyName = key;
					 			}
					 				
					 		}
					 		
					 		if (propertyName.indexOf("Unknown gene")>-1)
					 			console.log(propertyName); 	
							else{
							 	var arr = d3.tsv.parseRows(d[2][propertyName])[0];
							 	
							 	for (var j=0;j<arr.length;j++){
							 		if (arr[j]!="NaN" && arr[j]!="0")
							 			count++;
							 	} 
							 	
						 		cBioPortalData1[geneName][p][i] = new Object();	
						 		cBioPortalData1[geneName][p][i]["Study"]=studyIds[i];
						 		cBioPortalData1[geneName][p][i]["count"] = count-2;
						 		cBioPortalData1[geneName][p][i]["totalcount"]=arr.length-2;
						 		cBioPortalData1[geneName][p][i]["Frequency"]=((count-2)*100/arr.length);		 		
						 	}
						}
					   
    						
					});  

				 })(request,i,p);
			} 
		
	} 
	
}







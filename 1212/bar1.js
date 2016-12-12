

var label =[0,1,2,3,4,5,6,7,8,9];

function barchart(label)
{
var obj={};
//for (var prop in obj) { if (obj.hasOwnProperty(prop)) { delete obj[prop]; } }
//d3.selectAll("svg2").remove();
var manisha=[];
console.log("outside"+label);
manisha.push(label);
var cBioPortalData = {};

var studyIds = ["paac_jhu_2014","laml_tcga_pub","laml_tcga","acyc_mskcc","acc_tcga","blca_mskcc_solit_2014","blca_mskcc_solit_2012","blca_mskcc_signet_ring_impact","blca_plasmacytoid_mskcc_2016","blca_bgi","blca_dfarber_mskcc_2014","blca_tcga_pub","blca_tcga","lgg_tcga","brca_bccrc","brca_broad","brca_sanger","brca_tcga_pub2015","brca_tcga_pub","brca_tcga","brca_bccrc_xenograft_2014","cellline_ccle_broad","cesc_tcga","chol_nccs_2013","chol_nus_2012","chol_tcga","ccrcc_utokyo_2013","coadread_genentech","coadread_tcga_pub","coadread_tcga","coadread_mskcc","cscc_dfarber_2015","desm_broad_2015","esca_broad","esca_tcga","escc_icgc","escc_ucla_2014","es_iocurie_2014","gbc_shanghai_2014","egc_tmucih_2015","gbm_tcga_pub2013","gbm_tcga_pub","gbm_tcga","hnsc_broad","hnsc_jhu","hnsc_tcga_pub","hnsc_tcga","all_stjude_2015","chol_jhu_2013","kich_tcga_pub","kich_tcga","kirc_bgi","kirc_tcga_pub","kirc_tcga","kirp_tcga","lihc_amc_prv","lihc_riken","lihc_tcga","lgg_ucsf_2014","luad_broad","luad_mskcc_2015","luad_tcga_pub","luad_tcga","luad_tsp","lusc_tcga_pub","lusc_tcga","dlbc_tcga","mpnst_mskcc","mbl_broad_2012","mbl_icgc","mbl_pcgp","skcm_broad_dfarber","lgggbm_tcga_pub","meso_tcga","prad_su2c_2015","mm_broad","ccrcc_irc_2014","cellline_nci60","npc_nusingapore","nbl_amc_2012","nepc_wcm","ov_tcga_pub","ov_tcga","paad_icgc","paad_tcga","paad_utsw_2015","panet_jhu_2011","thca_tcga_pub","es_dfarber_broad_2014","pcpg_tcga","thyroid_mskcc_2016","pcnsl_mayo_2015","prad_broad_2013","prad_broad","prad_mskcc","prad_fhcrc","prad_tcga_pub","prad_tcga","prad_mskcc_2014","prad_mskcc_cheny1_organoids_2014","prad_mich","nccrcc_genentech_2014","rms_nih_2014","sarc_mskcc","sarc_tcga","skcm_broad","skcm_tcga","skcm_yale","scco_mskcc","sclc_clcgp","sclc_jhu","sclc_ucologne_2015","stad_pfizer_uhongkong","stad_tcga_pub","stad_tcga","stad_utokyo","stad_uhongkong","tgct_tcga","tet_nci_2014","thym_tcga","thca_tcga","ucs_jhu_2014","ucs_tcga","ucec_tcga","ucec_tcga_pub","uvm_tcga"];
var profileIds = ["_mutations","_gistic"];
var profileDefaultProperty = ["# DATA_TYPE Mutations","# DATA_TYPE Putative copy-number alterations from GISTIC"];
var studyNames = ["Acinar Cell Carcinoma of the Pancreas (Johns Hopkins, J Pathol 2014)","Acute Myeloid Leukemia (TCGA, NEJM 2013)","Acute Myeloid Leukemia (TCGA, Provisional)","Adenoid Cystic Carcinoma (MSKCC, Nat Genet 2013)","Adrenocortical Carcinoma (TCGA, Provisional)","Bladder Cancer (MSKCC, Eur Urol 2014)","Bladder Cancer (MSKCC, J Clin Oncol 2013)","Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)","Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)","Bladder Urothelial Carcinoma (BGI, Nat Genet 2013)","Bladder Urothelial Carcinoma (Dana Farber & MSKCC, Cancer Discovery 2014)","Bladder Urothelial Carcinoma (TCGA, Nature 2014)","Bladder Urothelial Carcinoma (TCGA, Provisional)","Brain Lower Grade Glioma (TCGA, Provisional)","Breast Invasive Carcinoma (British Columbia, Nature 2012)","Breast Invasive Carcinoma (Broad, Nature 2012)","Breast Invasive Carcinoma (Sanger, Nature 2012)","Breast Invasive Carcinoma (TCGA, Cell 2015)","Breast Invasive Carcinoma (TCGA, Nature 2012)","Breast Invasive Carcinoma (TCGA, Provisional)","Breast cancer patient xenografts (British Columbia, Nature 2014)","Cancer Cell Line Encyclopedia (Novartis/Broad, Nature 2012)","Cervical Squamous Cell Carcinoma and Endocervical Adenocarcinoma (TCGA, Provisional)","Cholangiocarcinoma (National Cancer Centre of Singapore, Nat Genet 2013)","Cholangiocarcinoma (National University of Singapore, Nat Genet 2012)","Cholangiocarcinoma (TCGA, Provisional)","Clear Cell Renal Cell Carcinoma (U Tokyo, Nat Genet 2013)","Colorectal Adenocarcinoma (Genentech, Nature 2012)","Colorectal Adenocarcinoma (TCGA, Nature 2012)","Colorectal Adenocarcinoma (TCGA, Provisional)","Colorectal Adenocarcinoma Triplets (MSKCC, Genome Biology 2014)","Cutaneous squamous cell carcinoma (DFCI, Clin Cancer Res 2015)","Desmoplastic Melanoma (Broad Institute, Nat Genet 2015)","Esophageal Adenocarcinoma (Broad, Nat Genet 2013)","Esophageal Carcinoma (TCGA, Provisional)","Esophageal Squamous Cell Carcinoma (ICGC, Nature 2014)","Esophageal Squamous Cell Carcinoma (UCLA, Nat Genet 2014)","Ewing Sarcoma (Institut Cuire, Cancer Discov 2014)","Gallbladder Carcinoma (Shanghai, Nat Genet 2014)","Gastric Adenocarcinoma (TMUCIH, PNAS 2015)","Glioblastoma (TCGA, Cell 2013)","Glioblastoma (TCGA, Nature 2008)","Glioblastoma Multiforme (TCGA, Provisional)","Head and Neck Squamous Cell Carcinoma (Broad, Science 2011)","Head and Neck Squamous Cell Carcinoma (Johns Hopkins, Science 2011)","Head and Neck Squamous Cell Carcinoma (TCGA, Nature 2015)","Head and Neck Squamous Cell Carcinoma (TCGA, Provisional)","Infant MLL-Rearranged Acute Lymphoblastic Leukemia (St Jude, Nat Genet 2015)","Intrahepatic Cholangiocarcinoma (Johns Hopkins University, Nat Genet 2013)","Kidney Chromophobe (TCGA, Cancer Cell 2014)","Kidney Chromophobe (TCGA, Provisional)","Kidney Renal Clear Cell Carcinoma (BGI, Nat Genet 2012)","Kidney Renal Clear Cell Carcinoma (TCGA, Nature 2013)","Kidney Renal Clear Cell Carcinoma (TCGA, Provisional)","Kidney Renal Papillary Cell Carcinoma (TCGA, Provisional)","Liver Hepatocellular Carcinoma (AMC, Hepatology 2014)","Liver Hepatocellular Carcinoma (RIKEN, Nat Genet 2012)","Liver Hepatocellular Carcinoma (TCGA, Provisional)","Low-Grade Gliomas (UCSF, Science 2014)","Lung Adenocarcinoma (Broad, Cell 2012)","Lung Adenocarcinoma (MSKCC 2015)","Lung Adenocarcinoma (TCGA, Nature 2014)","Lung Adenocarcinoma (TCGA, Provisional)","Lung Adenocarcinoma (TSP, Nature 2008)","Lung Squamous Cell Carcinoma (TCGA, Nature 2012)","Lung Squamous Cell Carcinoma (TCGA, Provisional)","Lymphoid Neoplasm Diffuse Large B-cell Lymphoma (TCGA, Provisional)","Malignant Peripheral Nerve Sheath Tumor (MSKCC, Nat Genet 2014)","Medulloblastoma (Broad, Nature 2012)","Medulloblastoma (ICGC, Nature 2012)","Medulloblastoma (PCGP, Nature 2012)","Melanoma (Broad/Dana Farber, Nature 2012)","Merged Cohort of LGG and GBM (TCGA, 2016)","Mesothelioma (TCGA, Provisional)","Metastatic Prostate Cancer, SU2C/PCF Dream Team (Robinson et al., Cell 2015)","Multiple Myeloma (Broad, Cancer Cell 2014)","Multiregion Sequencing of Clear Cell Renal Cell Carcinoma (IRC, Nat Genet 2014)","NCI-60 Cell Lines (NCI, Cancer Res. 2012)","Nasopharyngeal Carcinoma (Singapore, Nat Genet 2014)","Neuroblastoma (AMC Amsterdam, Nature 2012)","Neuroendocrine Prostate Cancer (Trento/Cornell/Broad 2016)","Ovarian Serous Cystadenocarcinoma (TCGA, Nature 2011)","Ovarian Serous Cystadenocarcinoma (TCGA, Provisional)","Pancreatic Adenocarcinoma (ICGC, Nature 2012)","Pancreatic Adenocarcinoma (TCGA, Provisional)","Pancreatic Cancer (UTSW, Nat Commun 2015)","Pancreatic Neuroendocrine Tumors (Johns Hopkins University, Science 2011)","Papillary Thyroid Carcinoma (TCGA, Cell 2014)","Pediatric Ewing Sarcoma (DFCI, Cancer Discov 2014)","Pheochromocytoma and Paraganglioma (TCGA, Provisional)","Poorly-Differentiated and Anaplastic Thyroid Cancers (MSKCC, JCI 2016)","Primary Central Nervous System Lymphoma (Mayo Clinic, Clin Cancer Res 2015)","Prostate Adenocarcinoma (Broad/Cornell, Cell 2013)","Prostate Adenocarcinoma (Broad/Cornell, Nat Genet 2012)","Prostate Adenocarcinoma (MSKCC, Cancer Cell 2010)","Prostate Adenocarcinoma (Nelson Lab, Fred Hutchinson CRC)","Prostate Adenocarcinoma (TCGA, Cell 2015)","Prostate Adenocarcinoma (TCGA, Provisional)","Prostate Adenocarcinoma CNA study (MSKCC, PNAS 2014)","Prostate Adenocarcinoma Organoids (MSKCC, Cell 2014)","Prostate Adenocarcinoma, Metastatic (Michigan, Nature 2012)","Renal Non-Clear Cell Carcinoma (Genentech, Nat Genet 2014)","Rhabdomyosarcoma (NIH, Cancer Discov 2014)","Sarcoma (MSKCC/Broad, Nat Genet 2010)","Sarcoma (TCGA, Provisional)","Skin Cutaneous Melanoma (Broad, Cell 2012)","Skin Cutaneous Melanoma (TCGA, Provisional)","Skin Cutaneous Melanoma (Yale, Nat Genet 2012)","Small Cell Carcinoma of the Ovary (MSKCC, Nat Genet 2014)","Small Cell Lung Cancer (CLCGP, Nat Genet 2012)","Small Cell Lung Cancer (Johns Hopkins, Nat Genet 2012)","Small Cell Lung Cancer (U Cologne, Nature 2015)","Stomach Adenocarcinoma (Pfizer and UHK, Nat Genet 2014)","Stomach Adenocarcinoma (TCGA, Nature 2014)","Stomach Adenocarcinoma (TCGA, Provisional)","Stomach Adenocarcinoma (U Tokyo, Nat Genet 2014)","Stomach Adenocarcinoma (UHK, Nat Genet 2011)","Testicular Germ Cell Cancer (TCGA, Provisional)","Thymic Epithelial Tumors (NCI, Nat Genet 2014)","Thymoma (TCGA, Provisional)","Thyroid Carcinoma (TCGA, Provisional)","Uterine Carcinosarcoma (Johns Hopkins University, Nat Commun 2014)","Uterine Carcinosarcoma (TCGA, Provisional)","Uterine Corpus Endometrial Carcinoma (TCGA, Provisional)","Uterine Corpus Endometrioid Carcinoma (TCGA, Nature 2013)","Uveal Melanoma (TCGA, Provisional)"];
var age={};
var age_obj=[];

generate_age();

function generate_age()
{
//loader.reset();
  //age[cancertype] = new Object();
 
   
 
  for (var p=0;p<profileIds.length-1;p++){  
  //age[cancertype][p] = new Object(); 
var i=0; 
var strServer = "http://www.cbioportal.org/webservice.do?"; 
// Profile blca_tcga_pub_gistic  blca_tcga_pub_mutations
var study = studyIds[i];
var profile = profileIds[p];
//var request = "cmd=getProfileData&case_set_id="+study+"_all&genetic_profile_id="+study+profile+"&gene_list="+geneName;
//console.log(manisha[]);
console.log(manisha[0]);
var request = "cmd=getClinicalData&case_set_id="+manisha[0]+"_all"
 
var str2 = strServer+request;
(function(request,i,p) {
d3.csv(str2, function(error, json) {
if (error) {
console.warn("warn: "+error);
// updateNodeColors();
//debugger;
return;
} 
})
.get()
.on('load', function(d) { 
var data = {};
for(var i=0;i<d.length;i++)
{
for( key in d[i])
{
                                var cancertype=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];
var age2=d[i][key].split(" ")[key.split(" ").indexOf("AGE")];
console.log(cancertype);
console.log(age2);
           if(age2<20)
{
if(age_obj[0]==undefined)
age_obj[0]=0; 
/*
var a = d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];
if(age_obj[a]=undefined)
{
age_obj[a]=[2];
console.log(age_obj[a]);
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;
*/
age_obj[0]++;
   }
              else if(age2>=20 && age2<30 )
{
if(age_obj[1]==undefined)
age_obj[1]=0;
/*var a=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];

if(age_obj[a]=undefined)
{
age_obj[a]=[];
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;*/
age_obj[1]++;
}
else if(age2>=30 && age2<40)
{
if(age_obj[2]==undefined)
age_obj[2]=0;
/*var a=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];

if(age_obj[a]=undefined)
{
age_obj[a]=[];
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;*/
age_obj[2]++;
}
else if(age2>=40 && age2<50)
{
if(age_obj[3]==undefined)
age_obj[3]=0;
/*var a=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];

if(age_obj[a]=undefined)
{
age_obj[a]=[];
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;
*/
age_obj[3]++;
}
                                    else if(age2>=50 && age2<60)
{
if(age_obj[4]==undefined)
age_obj[4]=0;
/*var a=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];
if(age_obj[a]=undefined)
{
age_obj[a]=[];
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;
*/
age_obj[4]++;
}
else if(age2>=60 && age2<70)
{
if(age_obj[4]==undefined)
age_obj[4]=0;
/*var a=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];
if(age_obj[a]=undefined)
{
age_obj[a]=[];
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;
*/
age_obj[4]++;
}
                                     else if(age2>=70)
{
if(age_obj[5]==undefined)
age_obj[5]=0;
/*var a=d[i][key].split(" ")[key.split(" ").indexOf("CANCER_TYPE")];
if(age_obj[a]=undefined)
{
age_obj[a]=[];
age_obj[a].push("AGE");
age_obj[a]=0;
} 
   age_obj[a]=parseInt(age_obj[a])+1;
*/
age_obj[5]++;
} 
}
}
});  
})
(request,i,p);
 

} 

 // loader();
}
//loader();


setTimeout(function loader(){
//d3.select(#label).remove();
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Parse the date / time
//var parseDate = d3.time.format("%Y-%m").parse;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
       .scale(x)
    .orient("bottom")
    .ticks(7);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg2 = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

var arr=[];
for(var i=0; i<=6; i++)
{
console.log(age_obj[i]);
var obj = {age: 20+i*10 ,count: age_obj[i]}; 
arr.push(obj);
}




  x.domain(arr.map(function(d) { return d.age; }));
  y.domain([0, d3.max(arr, function(d) { return d.count; })]);

  svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg2.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("count");

  svg2.selectAll("bar")
      .data(arr)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", function(d) { return x(d.age); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return height - y(d.count); });
 
 },2000);
}
<?php get_template_part('templates/page', 'header'); ?>

<input type="text" ng-model="test">
<p>{{ test }}</p>

<div ng-controller="mainCtrl as main">

	<h2>les fiches :</h2>
	
	<ul>
		<li ng-repeat="fiche in main.fiches">titre : {{ fiche.title }}</li>
	</ul>

</div>
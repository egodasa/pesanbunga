app.controller("crud", function($scope, $http, $location){
	$scope.readData = function(){
		$http.get('http://localhost:3000/api/tbpengguna').then(function(res){
			$scope.data_tabel = res.data.data;
		}), function(res){
			$scope.data_tabel ="error";
			};
		};
	$scope.deleteData = function(id){
		$http.post('http://localhost:3000/api/delete',{id : id}).then(function(res){
			$scope.result = res.data.status;
			if($scope.result == true){
				console.log("data berhasil dihapus");
			$scope.readData();
			//$location.path('/');
			}
			else {
				console.log("data gagal dihapus");
				$scope.readData();
			}
		}), function(res){
			console.log(res.data.status);
			};
		};
	$scope.createData = function(){
		var data = {
			Tus : $scope.Tus,
			Tps : $scope.Tps,
			Thp : $scope.Thp,
			Tem : $scope.Tem,
			Tnm : $scope.Tnm
		};
		console.log(data.Tus);
		$http.post('http://localhost:3000/api/create',data).then(function(res){
			$scope.result = res.data.status;
			if($scope.result == true){
				console.log("data berhasil ditambah");
				$location.path('/');
			}
			else {
				console.log("data gagal ditambah");
				$location.path('/');
			}
		}), function(res){
			console.log(res.data.status);
			};
		};
$scope.readData();
});


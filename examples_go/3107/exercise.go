package main

import (
	"fmt"
)

// Tinh dien tich va chu vi hinh chu nhat
func rectangle(width, height int) (int, int) {
	area := width * height
	perimeter := (width + height) * 2
	return area, perimeter
}

// Tinh giai thua mot so nguyen
func factorial(num int) int {
	result := 1
	
	for i := 1; i <= num; i++ {
		result = result * i
	}
	return result
}

// Kiem tra so nguyen to
func primeNumber(num int) {
	flag := true

	if num < 2 {
		flag = false
	} else {
		for i := 2; i < num-1; i++ {
			if num%i == 0 {
				flag = false
				break
			}
		}
	}

	if flag == true {
		fmt.Println("La so nguyen to")
	} else {
		fmt.Println("Khong la so nguyen to")
	}
}

// In ra tat ca so hoan hao nho hon 200
func perfectNumber(num int) {
	flag := true
	sum := 0
	for i := 1; i < num; i++ {
		if num%i == 0 {
			sum = sum + i
		}
	}

	if sum == num {
		flag = true
	} else {
		flag = false
	}

	if flag == true {
		fmt.Println("So hoan hao")
	} else {
		fmt.Println("So khong hoan hao")
	}
}

func main() {
	// In ra ket qua bai 1 phan 1
	area, perimeter := rectangle(5, 4)
	fmt.Println("Dien tich hinh ch nhat la:", area)
	fmt.Println("Chu vi hinh ch nhat la:", perimeter)
	fmt.Println("")

	// In ra ket qua bai 1 phan 2
	result := factorial(5)
	fmt.Println("Gia thua cua so 3 la:", result)
	fmt.Println("")

	// In ra ket qua bai 2 phan 2
	primeNumber(2)
	fmt.Println("")

	// In ra ket qua bai 3 phan 2
	perfectNumber(6)
}

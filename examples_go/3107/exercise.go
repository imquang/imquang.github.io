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

// Kiem tra so ngay cua thang
func checkMonth(month, year int) {
	switch {
	case month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12:
		fmt.Println("Nam", year, "khong phai nam nhuan")
		fmt.Println("Thang", month, "co 31 ngay")
	case month == 4 || month == 6 || month == 9 || month == 11:
		fmt.Println("Nam", year, "khong phai nam nhuan")
		fmt.Println("Thang", month, "co 30 ngay")
	case year%4 == 0 && month == 2:
		fmt.Println("Nam", year, "la nam nhuan")
		fmt.Println("Thang", month, "co 29 ngay")
	default:
		fmt.Println("Nam", year, "khong phai nam nhuan")
		fmt.Println("Thang", month, "co 28 ngay")
	}
}

// Dao nguoc mang
func reverseArray() {
	a := [...]int{1, 4, 6, 9, 23, 2, 7}
	var b []int
	for i := len(a) - 1; i >= 0; i-- {	// Cho i chay nguoc lai
		b = append(b, a[i])
	}
	fmt.Println(a)
	fmt.Println(b)
}

// Run first
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
	fmt.Println("")

	// In ra ket qua bai 4 phan 2
	checkMonth(2, 2020)
	fmt.Println("")
	
	// In ra ket qua bai 1 phan 3
	reverseArray()
}

package com.freire.my_api;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.freire.my_api.Exer6.Funcionario;
import com.freire.my_api.Exer6.Pessoa;
import com.freire.my_api.Exer6.Usuario;

import ch.qos.logback.core.joran.conditional.ElseAction;

public class Exercises {

    private Scanner read = new Scanner(System.in);

    public void Exer1() {
        System.out.println("1° numero: ");
        float num1 = read.nextFloat();
        System.out.println("2° numero: ");
        float num2 = read.nextFloat();
        System.out.println("3° numero: ");
        float num3 = read.nextFloat();
        System.out.println("4° numero: ");
        float num4 = read.nextFloat();

        float mean = (num1 + num2 + num3 + num4) / 4;

        if (mean >= 90)
            System.out.println("Parabéns");
        else if (mean >= 70)
            System.out.println("Aprovado");
        else if (mean <= 30)
            System.out.println("Reprovado");
        else
            System.out.println("Recuperação");
    }

    public void Exer2() {
        System.out.println("Quantidade de numeros: ");
        int quantity = read.nextInt();
        Float[] list = new Float[quantity];
        float num;

        for (int i = 0; i < quantity; i++) {
            System.out.printf("\nnumero %d: ", i);
            num = read.nextFloat();
            list[i] = num;
        }
        num = 0;

        for (int i = 0; i < quantity; i++)
            num += list[i];

        System.out.println(num);
    }

    public void Exer3(ArrayList<Float> list) {

        float num = 0;
        for (int i = 0; i < list.size(); i++) {
            num += list.get(i);
        }
        System.out.println(num / list.size());
    }

    public void Exer4() {
        for (int i = 1000; i < 1999; i++) {
            if (i % 11 == 5)
                System.out.println(i);
        }
    }

    public void Exer5() {
        int num = 0;
        for (int i = 0; i < 1000; i++) {
            if (i % 2 == 0)
                System.out.println(i);
            else
                num += i;
        }
        System.out.println(num);
    }

    public void Exer6() {
        Pessoa pessoa1 = new Pessoa(1, "lucas");
        Pessoa pessoa2 = new Pessoa(1, "lucas");

        Usuario Usuario1 = new Usuario(1, "lucas");
        Usuario Usuario2 = new Usuario(1, "lucas");

        Funcionario Funcionario1 = new Funcionario(1, "lucas");
        Funcionario Funcionario2 = new Funcionario(1, "lucas");

        System.out.println(pessoa1);
        System.out.println(pessoa2);
        System.out.println(Usuario1);
        System.out.println(Usuario2);
        System.out.println(Funcionario1);
        System.out.println(Funcionario2);
    }

    public void Exer7() {
        ArrayList<Funcionario> list = new ArrayList<Funcionario>();

        Funcionario f1 = new Funcionario(1, "null");
        Funcionario f2 = new Funcionario(1, "null12");

        list.add(f1);
        list.add(f2);

        for (Funcionario item : list) {
            System.out.println(item);
        }
    }

    public void Exer8() {
        ArrayList<Float> list = new ArrayList<Float>();

        list.add(1f);
        list.add(10f);
        list.add(13f);
        list.add(12f);
        list.add(11f);
        list.add(12f);
        list.add(2f);
        list.add(14f);
        list.add(155f);

        Float min = list.get(0);
        for (Float item : list) {
            if(min > item)
                min = item;
        }
        System.out.println(min);
    }

    public void Exer9() {

        String word = read.nextLine();
        int num = word.length();
        System.out.println(word.subSequence((num / 2), (num / 2) + 1));
    }
}

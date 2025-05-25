
package com.library.controller;

import com.library.model.Book;
import com.library.model.Transaction;
import com.library.repository.BookRepository;
import com.library.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class LibraryController {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private TransactionRepository transactionRepo;

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {
        book.setStatus("available");
        return bookRepo.save(book);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepo.deleteById(id);
    }

    @PostMapping("/issue")
    public Transaction issueBook(@RequestBody Transaction tx) {
        Book book = bookRepo.findById(tx.getBookId()).orElseThrow();
        book.setStatus("issued");
        bookRepo.save(book);

        tx.setIssueDate(LocalDate.now());
        tx.setDueDate(LocalDate.now().plusDays(14));
        return transactionRepo.save(tx);
    }

    @PostMapping("/return")
    public Transaction returnBook(@RequestBody Transaction tx) {
        Book book = bookRepo.findById(tx.getBookId()).orElseThrow();
        book.setStatus("available");
        bookRepo.save(book);

        Transaction tr = transactionRepo.findById(tx.getId()).orElseThrow();
        tr.setReturnDate(LocalDate.now());
        return transactionRepo.save(tr);
    }

    @GetMapping("/transactions")
    public List<Transaction> getTransactions() {
        return transactionRepo.findAll();
    }
}

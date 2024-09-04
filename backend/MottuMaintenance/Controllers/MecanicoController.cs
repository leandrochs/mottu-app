using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MottuMaintenance.Data;
using MottuMaintenance.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MottuMaintenance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MecanicoController : ControllerBase
    {
        private readonly MottuContext _context;

        public MecanicoController(MottuContext context)
        {
            _context = context;
        }

        // GET: api/Mecanico
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mecanico>>> GetMecanicos()
        {
            return await _context.Mecanicos.ToListAsync();
        }

        // GET: api/Mecanico/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mecanico>> GetMecanico(int id)
        {
            var mecanico = await _context.Mecanicos.FindAsync(id);

            if (mecanico == null)
            {
                return NotFound();
            }

            return mecanico;
        }

        // POST: api/Mecanico
        [HttpPost]
        public async Task<ActionResult<Mecanico>> PostMecanico(Mecanico mecanico)
        {
            _context.Mecanicos.Add(mecanico);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMecanico), new { id = mecanico.MecanicoId }, mecanico);
        }

        // PUT: api/Mecanico/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMecanico(int id, Mecanico mecanico)
        {
            if (id != mecanico.MecanicoId)
            {
                return BadRequest();
            }

            _context.Entry(mecanico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Mecanicos.Any(e => e.MecanicoId == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Mecanico/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMecanico(int id)
        {
            var mecanico = await _context.Mecanicos.FindAsync(id);
            if (mecanico == null)
            {
                return NotFound();
            }

            _context.Mecanicos.Remove(mecanico);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        

        // O método GetMecanicoMaisEficiente assume que a eficiência é baseada no tempo médio de conserto. Ele considera apenas mecânicos que tenham realizado consertos e ordena-os pelo menor tempo médio.
        
        [HttpGet("MaisEficiente")]
        public async Task<ActionResult<Mecanico>> GetMecanicoMaisEficiente()
        {
            var mecanicoMaisEficiente = await _context.Mecanicos
                .Where(m => m.ConsertoMotos != null && m.ConsertoMotos.Any())
                .OrderBy(m => m.ConsertoMotos!.Average(c => c.TempoReal.HasValue ? c.TempoReal.Value : 0))
                .FirstOrDefaultAsync();

            if (mecanicoMaisEficiente == null)
            {
                return NotFound("Nenhum mecânico encontrado com consertos realizados.");
            }

            return mecanicoMaisEficiente;
        }
    }
}